const express = require("express");
const burger = require("../models/burger.js")

var router = express.Router();

router.post("/api/burgers", function(req, res){


    
})

router.put("/api/burgers/:id", function(req, res){
    
    burger.update()

    
})


router.get("/", function(req, res){



})


module.export = router;