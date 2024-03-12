const mysql = require('mysql2')
const connection = require('../config/database.js')

const getHomepage = (req, res) => {

//   let users = [];

//   connection.query('Select * from Users u', function (err, result, fields) {
//     users = result;
//     console.log("result: " + JSON.stringify(result));

//     console.log("User: " + JSON.stringify(users));
//     res.send(JSON.stringify(users))
//   })

    return res.render('home.ejs')
}

const getABC = (req, res) => {
  res.send('ABC')
}

module.exports = {
  getHomepage,
  getABC
}