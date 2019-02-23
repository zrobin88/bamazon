var mysql = require("mysql");
var inquirer = require("inquirer");


//connection 
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "@Stang88gt",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

//start function
start = () => {
  readProducts();
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "What would you like to purcahse?"
        },
        {
          name: "amount",
          type: "input",
          message: "How much would you like?"
        }
      ])
      .then(function (answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
            chosenItemQuantity = results[i].quantity;
            chosenItemPrice = results[i].price

            console.log(results[i].quantity);
          }

        }
        if (chosenItemQuantity > answer.amount) {
          //let chosenItemId = chosenItem.id;
          console.log("we got it");
          console.log("Youre total is: $" + chosenItemPrice * answer.amount);
         
          connection.query(
            /*"UPDATE products SET quantity = quantity - " + answer.amount + "WHERE id =" + chosenItemId,
            function (err, results) {
              //for (let i = 0; i < results.length; i++) {
              console.log(chosenItemQuantity-answer.amount + " Left in stock");

              //}

             } */ 

             "UPDATE products SET ? WHERE ?",
        [
            {
                quantity: answer.amount 
            },
            {
                id: chosenItem.Id
            }
        ],
          console.log(chosenItemQuantity - answer.amount+" Left In Stock")
          );
           inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstChoice',
                    message: 'Would you like to purchase more? (y/n): '
                },
            ]).then(function (answers) {
                if(answers.firstChoice === 'y'){
                    start();
                } else {
                    console.log('Goodbye.');
                    connection.end();
                }
            });
         
      }
        
      });
  }
  )
};

//read products function
readProducts = () => {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
  });
}









