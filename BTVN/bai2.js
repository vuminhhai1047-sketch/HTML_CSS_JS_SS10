

const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
}



const addPerformanceScore = (player) => {

    const perFormanceScore = (player.goals + player.assists) / player.matchesPlayed;
    player.performancePerMatch = Number(perFormanceScore.toFixed(2));
    player.isKeyPlayer = player.performancePerMatch >= 1.0;

    console.log(player);
}


addPerformanceScore(player);

