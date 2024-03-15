const path =require('path')
const express = require('express')

const configViewEngine = (app) =>{
    console.log(__dirname);

    //set dir view
    app.set('views', path.join("./src", 'views'))

    //set view template engine
    app.set('view engine', 'ejs')

    //set static file
    app.use(express.static(path.join("./src", 'public')))

}

module.exports = configViewEngine;