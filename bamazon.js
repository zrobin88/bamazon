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

            
          }

        }
        if (chosenItemQuantity > answer.amount) {
          //let chosenItemId = chosenItem.id;
          console.log("We have it in stock!");
          inquirer.prompt([
            {
                type: 'input',
                name: 'firstChoice',
                message: 'Add this item to your cart? (y/n): '
            },
        ]).then(function (answers) {
          if(answers.firstChoice === 'y'){
            console.log("Youre total is: $" + chosenItemPrice * answer.amount);
             connection.query(
            
             "UPDATE products SET quantity=quantity - 1 WHERE id = id",
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
                    console.log('Thanks for shopping! Proceed to checkout.');
                    connection.end();
                }
            });
        } else {
            start();
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

   
  });
}









