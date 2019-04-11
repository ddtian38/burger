var orm = require("../config/orm.js");

class Burger {
    constructor(){

    }
    select(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    }

    insert(val, cb){
        orm.insertOne("burgers", "burger_name", val, function(res){
            cb(res)
        })
    }

    update(val, id, cb){
        
        orm.updateOne("burgers", "devoured", val, id, function(res){
            cb(res)
        })
    }
}

var burger = new Burger();
module.exports = burger;