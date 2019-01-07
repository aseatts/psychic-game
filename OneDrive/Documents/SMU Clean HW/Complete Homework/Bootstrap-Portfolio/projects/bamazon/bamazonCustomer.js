// ===== REQUIRED NPMS/DEPENDENCIES ===== //
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

// ===== DATABASE + SERVER CONNECTION ===== //
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("CONNECTION TO SERVER SUCCESSFUL...");

  createTable();
});

// ===== START APP ===== //

// ===== CREATE TABLE ===== //
var createTable = function() {
  connection.query("SELECT * FROM Products", function(err, res) {
    // DEFINES AND CREATES TABLE
    var table = new Table({
      head: ["Product ID", "Product Name", "Department", "Price", "Qty"],
      style: {
        head: ["blue"],
        compact: false,
        colAligns: ["center"]
      }
    });

    // LOOPS THROUGH ITEMS IN MYSQL
    for (var i = 0; i < res.length; i++) {
      table.push([
        res[i].ItemID,
        res[i].ProdName,
        res[i].Dept,
        "$" + res[i].Price,
        res[i].Qty
      ]);
    }

    // DISPLAYS TABLE IN CONSOLE
    console.log("==============/// WELCOME TO BAMAZON ///===============");
    console.log(table.toString());

    salePrompt(res);
  });
};

//=== FUNCTION TO PROMPT USER TO START A SALE ===//
function salePrompt(res) {
  // ASKS USER WHAT THEY WOULD LIKE TO PURCHASE
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Hello! Please enter the ID for the item you want to purchase?"
      },
      // ASKS USER FOR QTY
      {
        name: "qty",
        type: "input",
        message: "How many do you want?"
      }
    ])
    .then(function(answer) {
      // PURCHASE VARIABLES
      var purchaseItem = answer;
      var selectedItemIndex = res.findIndex(function(obj) {
        return obj.ItemID == purchaseItem.id;
      });
      var price = res[selectedItemIndex].Price;
      var saleQty = parseInt(answer.qty);
      var saleTotal = (price * saleQty).toFixed(2);
      var stockQty = res[selectedItemIndex].Qty;

      //stock qty check
      if (stockQty >= saleQty) {
        //qty update with purchase
        connection.query(
          "UPDATE Products SET ? WHERE ?",
          [
            {
              Qty: stockQty - saleQty
            },
            {
              ItemID: answer.id
            }
          ],
          function(err, result) {
            if (err) throw err;

            console.log(
              "Purchase Successful! Your total is " +
                saleTotal +
                ". Your item(s) will be shipped. Thank you for choosing Bamazon!"
            );

            restart(res);
          }
        );
      } else {
        console.log("Sorry, we don't have enough of those for this order");

        restart(res);
      }

      console.log("done");
    });
}

//=== Prompts user if they would like to make an additonal purchase ===//
function restart(res) {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "addlSale",
        message: "Would you like to purchase additonal item(s)"
      }
    ])
    .then(function(answer) {
      if (answer.addlSale) {
        salePrompt(res);
      } else {
        console.log("Please come again.");
      }
    });
}

// // ===== TO DOs ===== //
//     // === BASIC REQUIREMENTS === //

//     // 2 - Prompt user with two messages (inquirer)
//         // 2a - ask for ID of the product they wish to buy
//         // 2b - ask how many units they want to buy
//     // 3- Once "order" is placed, check if store has enough "stock"
//         // 3a - if not  app should log "INSUFFICIENT QUANTITY!" & cancel order.
//         // 3b - if yes, process order.
//     // 4 - Fulfill order
//         // 4a - update sql database to reflect remaining qty
//         // 4b - show total cost of purchase

// === CUSTOMER CHALLENGE === //
// ADD product_sales, value updated with each indv prod total revenue from each sale
// UPDATE so that when customer purchases anything, price of the product multiplied by qty purchase is added to 'product_sales' for that prod
// ensure app still updats inventory listed in "products"
