const express = require("express");


var router = express.Router();

const burger = require("../models/burger.js")


router.post("/api/burgers", function(req, res){


    res.send("hi")

})

router.put("/api/burgers/:id", function(req, res){
    
    res.send("hi")

    
})


router.get("/", function(req, res){
    burger.all(function(data){
        for(var i = 0; i < data.length; i++){
            if(data[i].devoured === 1){
                data[i].devoured = true;
            }else{
                data[i].devoured = false;
            }
        }
        var burgerObjects = {burgers: data}
        console.log(burgerObjects)

        res.render("index", {burgers: data})

    })

    

})

console.log(router)

module.exports = router;