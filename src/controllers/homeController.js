const mysql = require('mysql2')
const connection = require('../config/database.js')
const {getAllUser, getUserById, postUpdateUserById, getDeleteUserById} = require('../services/crudService.js')


//get Homepage
const getHomepage =  async (req, res) => {
  const results = await getAllUser();
  console.log(">>> results: " + results);
  return res.render('home.ejs', {listUser: results})
}

//get edit user
const getEditUser = async (req, res) => {
  const user = await getUserById(req.params.id);
  console.log(">>> results ID: " + user);
  res.render('editUser.ejs', {findedUser: user})
}


// post create user
const postCreateUser = (req, res) => {
  console.log(">>> res.body: " + req.body);

  console.log(">>> res.body.name: " + req.body.userName);
  console.log(">>> res.body.email: " + req.body.userEmail);
  console.log(">>> res.body.city: " + req.body.userCity);

  connection.query('Insert into Users (name, email, city) values (?, ?, ?)', [
    req.body.userName, req.body.userEmail, req.body.userCity
  ], function (err, result, fields) {
    alert('Insert user successfull' + result);
    res.redirect("/")
  })
}

// post update user
const postUpdateUser = async (req, res) => {
  console.log(">>> req.body: " + req.body);
  console.log(">>> req.body.userId: " + req.body.userId);
  console.log(">>> req.body.userName: " + req.body.userName);
  console.log(">>> req.body.userEmail: " + req.body.userEmail);
  console.log(">>> req.body.userCity: " + req.body.userCity);
  const results = await postUpdateUserById(req.body.userId, req.body.userName, req.body.userEmail, req.body.userCity);
  console.log(">>> results: " + results);
  res.send("UPDATE SUCCESS")
}

// post delete user
const getDeleteUser = async (req, res) => {
  console.log(">>> req.body.userId: " + req.params.id);
  const results = await getDeleteUserById(req.params.id);
  console.log(">>> results: " + results);
  res.redirect("/")
}

// test thoi
const getABC = (req, res) => {
  res.send('ABC')
}

const getUser = (req, res) => {
  res.send('User')
}
module.exports = {
  getHomepage,
  getABC,
  postCreateUser,
  getUser,
  getEditUser,
  postUpdateUser,
  getDeleteUser
}