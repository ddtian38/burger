const connection = require("./connection.js")

class Orm{
    constructor(){

    }

    selectAll(table, cb){
        var query = "SELECT * FROM ??"
        connection.query(query, [table], function(err, data){
            if(err){throw err}
            // console.log(data);
            cb(data)
        })

    }

    insertOne(table, col, val, cb){
        console.log(val)
        var query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [table, col, val], function(err, res){
            if(err) throw err;
            // console.log(res);
            cb(res);
        })
        
    }

    updateOne(table, col, val, id, cb){
        var query = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(query, [table, col, val, id], function(err, res){
            if (err) throw err;
            // console.log(res);
            cb(res);
        })

    }

}

const orm = new Orm()
module.exports = orm;
