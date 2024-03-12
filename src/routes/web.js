const express = require("express")
const { getHomepage, getABC } = require("../controllers/homeController")
const router = express.Router()


//router.method('route', handler)

router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/helloejs', (req, res) => {
  res.render('helloworld.ejs')
})


module.exports = router;