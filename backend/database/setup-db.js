const Datastore = require('nedb');
const bcrypt = require('bcrypt');
let users = new Datastore({filename: './database/users.db', autoload: true});
const matches = new Datastore({filename: './database/matches.db', autoload: true});
const crypto = require('crypto');

function encryptPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex'); // generate a random salt
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex'); // generate a hash using PBKDF2 algorithm
    return { salt, hash }; // return the salt and hash as an object
}

function verifyPassword(password, salt, hash) {
    const generatedHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    console.log(generatedHash);
    return generatedHash === hash; // compare the generated hash with the stored hash
}


function seed_football_matches() {
    matches.insert({ event: 'Premier League', homeTeam: 'Man Utd', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png', awayTeam: 'Man City', awaiTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png', startTime: new Date(2023, 1, 5, 19, 0)});
    matches.insert({ event: 'Premier League', homeTeam: 'Liverpool', homeTeamLogo: 'TODO: add link', awayTeam: 'Brighton', awaiTeamLogo: 'TODO: add link', startTime: new Date(2023, 1, 5, 22, 0)});
    matches.insert({ event: 'La Liga', homeTeam: 'Barcelona', homeTeamLogo: 'TODO: add link', awayTeam: 'Real Madrid', awaiTeamLogo: 'TODO: add link', startTime: new Date(2023, 1, 5, 21, 45)});
    matches.insert({ event: 'Seria A', homeTeam: 'Juventus', homeTeamLogo: 'TODO: add link', awayTeam: 'Inter', awaiTeamLogo: 'TODO: add link', startTime: new Date(2023, 1, 6, 18, 0)});
    matches.insert({ event: 'FA Cup', homeTeam: 'Chelsea', homeTeamLogo: 'TODO: add link', awayTeam: 'Arsenal', awaiTeamLogo: 'TODO: add link', startTime: new Date(2023, 1, 7, 19, 30)});
}

function register(username, password) {
    if (!doesUserExists(username, password)) {
        let result = encryptPassword(password);
        console.log(result);
        console.log(username);
        users.insert({ username: username, password: result.hash, salt: result.salt });
    }
}

function doesUserExists(username, password) {
    let allUsers = users.getAllData();
    console.log(allUsers)
    for (let user in allUsers) {
        //TODO: Check for password
        console.log(user.username)
        if (user.username == username) {
            return user;
        }
    }
    return false;
}

const hashPassword = async password => {
    bcrypt.genSalt(10)
        .then(salt => {
            console.log('Salt: ', salt)
        })
        .then(hash => {
            console.log('Hash: ', hash)
            return hash;
        })
        .catch(err => console.error(err.message))
};

function getAllMatches() {
    console.log(users.getAllData())
    return matches.getAllData();
}

module.exports = { seed_football_matches, register, doesUserExists, getAllMatches };
