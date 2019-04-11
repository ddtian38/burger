const express = require("express");


var router = express.Router();

const burger = require("../models/burger.js")


router.post("/api/burgers/", function(req, res){
    console.log(req.body)
    burger.insert(req.body.burger, function(response){
        if(response.affectedRows === 0){
            res.status(500).send()
        }else{
            res.status(200).send()
        }

    })

})

router.put("/api/burgers/:id", function(req, res){
    console.log(req.body)
    burger.update(req.body.devoured, req.body.burgerID, function(response){
        if(response.changedRows === 0){
            res.status(500).send()
        }else{
            res.status(200).send()
        }   
    })
        
})

router.get("/", function(req, res){
    burger.all(function(data){

        var burgerObjects = {burgers: data}
        console.log(burgerObjects)

        res.render("index", {burgers: data})

    })
})

module.exports = router;