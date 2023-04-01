const Datastore = require('nedb');

function create_db() {
    var db = new Datastore({filename: './database/test.db', autoload: true});

    db.insert({name: 'TestName', testMessage: 'Hellooo'}, function (err, doc) {
        if (err) {
            console.log('Error inserting user: ', err);
        } else {
            console.log('User inserted successfully: ', doc);
        }
    });
}
function seed_football_matches() {
    var matches = new Datastore({filename: './database/matches.db', autoload: true});
    matches.insert({ homeTeam: 'Man Utd', homeTeamLogo: 'TODO: add link', awayTeam: 'Man City', awaiTeamLogo: 'TODO: add link'})
}

module.exports = { create_db };
