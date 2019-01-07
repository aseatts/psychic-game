// ===== REQUIRED NPMS ===== //
var mysql = require("mysql");
var inquirer = require("inquirer");

// ===== DATABASE + SERVER CONNECTION ===== //

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "greatBay_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// ===== TO DOs ===== //
// === CHALLENGE 2 : MANAGER VIEW === //
// 1 - LIST set of menu options: VIEW PROD FOR SALE, LOW INVENTORY, ADD TO INVENTORY, ADD NEW PRODUCT
// 2 - VIEW PRODUCTS FOR SALE: List all availble products w/ id, name, price, and qty
// 3 - LOW INVENTORY: List all items with qty less than 5.
// 4 - ADD TO INVENTORY : Display prompt to add more of any current inventory items.
// 5 - ADD NEW PRODUCT :  Adds new product to "store"
