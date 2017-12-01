// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    insertOne: function (some_val, cb) {
        orm.insertOne('burgers', 'burger_name', some_val, function (res) {
            cb(res);
        });
    },
    updateOne: function (user_id, cb) {
        orm.updateOne('burgers', 'devoured', 1, 'id', user_id, function (res) {
            cb(res);
        });
    }
    // delete: function (user_id, cb) {
    //     orm.delete('burgers', 'id', user_id, function (res) {
    //         cb(res);
    //     });
    // }
}

// Export the database functions for the controller (catsController.js).
module.exports = burger;