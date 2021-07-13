const team = {
    _players: [
        { firstName: 'Ali', lastName: 'Karimi', age: 33 },
        { firstName: 'Mehrdad', lastName: 'Minavand', age: 44 },
        { firstName: 'karim', lastName: 'Bagheri', age: 55 }
    ],
    _games: [
        { opponent: 'perspolis', teamPoints: 2, opponentPoints: 7 },
        { opponent: 'teraktor', teamPoints: 3, opponentPoints: 2 },
        { opponent: 'Folad Ahan', teamPoints: 5, opponentPoints: 4 }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = { firstName: firstName, lastName: lastName, age: age };
        this.players.push(player)
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = { opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints };
        this.games.push(game)
    }
}
team.addPlayer('Steph', 'Curry', 28),
    team.addPlayer('Lisa', 'Leslie ', 44),
    team.addPlayer('Bugs ', 'Bunny ', 76),

    console.log(team.players)

team.addGame('Omid', 10, 9);
team.addGame('Shahin', 4, 8);
team.addGame('Esteghlal', 1, 3);

console.log(team.games)