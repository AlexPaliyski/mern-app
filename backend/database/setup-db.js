const Datastore = require('nedb');
const bcrypt = require('bcrypt');
const users = new Datastore({filename: './database/users.db', autoload: true});
const matches = new Datastore({filename: './database/matches.db', autoload: true});

function seed_football_matches() {
    matches.insert({ event: 'Premier League', homeTeam: 'Man Utd', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png', awayTeam: 'Man City', awaiTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png', startTime: new Date(2023, 1, 5, 19, 0)});
    matches.insert({ event: 'Premier League', homeTeam: 'Liverpool', homeTeamLogo: 'TODO: add link', awayTeam: 'Brighton', awaiTeamLogo: 'TODO: add link', startTime: new Date(2023, 1, 5, 22, 0)});
    matches.insert({ event: 'La Liga', homeTeam: 'Barcelona', homeTeamLogo: 'TODO: add link', awayTeam: 'Real Madrid', awaiTeamLogo: 'TODO: add link', startTime: new Date(2023, 1, 5, 21, 45)});
    matches.insert({ event: 'Seria A', homeTeam: 'Juventus', homeTeamLogo: 'TODO: add link', awayTeam: 'Inter', awaiTeamLogo: 'TODO: add link', startTime: new Date(2023, 1, 6, 18, 0)});
    matches.insert({ event: 'FA Cup', homeTeam: 'Chelsea', homeTeamLogo: 'TODO: add link', awayTeam: 'Arsenal', awaiTeamLogo: 'TODO: add link', startTime: new Date(2023, 1, 7, 19, 30)});
}

function register(username, password) {
    if (!doesUserExists(username, password)) {
        users.insert({ username: username, password: password });
    }
}

function doesUserExists(username, password) {
    for (let user in users) {
        //TODO: Check for password
        if (user.username == username) {
            return user;
        }
    }
}

const hashPassword = async password => {
    try {
        const salt = await bcrypt.genSalt(12);
        return await bcrypt.hash(password, salt);
    } catch (err) {
        throw new Error(err.message);
    }
};

function getAllMatches() {
    return matches.getAllData();
}

module.exports = { seed_football_matches, register, doesUserExists, getAllMatches };
