import * as nedb from 'nedb';
function create_db() {
    var Datastore = require('nedb')
        , db = new Datastore();
    db.loadDatabase(function (err) {    // Callback is optional
        // Now commands will be executed
    });
}
export default create_db();
