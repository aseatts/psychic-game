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
// === SUPERVISOR VIEW === //
// 1 - Menu Options :  View Product Sales by Department, Create New Department
// 2 - VIEW SALES BY DEPT : Display summarized table in terminal
/* Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        | */
/* 2a -  total_profit: should calculate difference btwn 'over_head_costs' & 'product_sales'.
                - 'total_profit should not be stored in database. Use custom alias */
/* If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.

   * Hint: You may need to look into aliases in MySQL.

   * Hint: You may need to look into GROUP BYs.

   * Hint: You may need to look into JOINS.

   * **HINT**: There may be an NPM package that can log the table to the console. What's is it? Good question :) */
