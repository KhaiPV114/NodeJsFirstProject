const express = require("express")
const { getHomepage, getABC, postCreateUser, getEditUser, postUpdateUser, postDeleteUser, getDeleteUser } = require("../controllers/homeController")
const router = express.Router()


//router.method('route', handler)

router.get('/', getHomepage)
router.get('/abc', getABC)
router.post('/create-user', postCreateUser)
router.get('/createUser', (req, res) => {
  res.render('createUser.ejs')
})
router.get('/editUser/:id', getEditUser)
router.post('/edit-user', postUpdateUser)
router.get('/delete-user/:id', getDeleteUser)
router.get('/helloejs', (req, res) => {
  res.render('helloworld.ejs')
})



module.exports = router;