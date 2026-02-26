


const teamHistory = [
    {
        name: "Messi",
        position: "Forward",
        nationality: "Argentina",
        season: {
            "2022-2023": {matches: 34, goals: 21, assists: 14, yellowCards: 3,},
            "2023-2024": {matches: 32, goals: 25, assists: 15, yellowCards: 2,},
            "2024-2025": {matches: 28, goals: 18, assists: 12, yellowCards: 1,},
        },
    },
    {
        name: "Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        season: {
            "2022-2023": {matches: 38, goals: 28, assists: 8, yellowCards: 5,},
            "2023-2024": {matches: 35, goals: 30, assists: 10,yellowCards: 4,},
            "2024-2025": {matches: 30, goals: 22, assists: 9, yellowCards: 3,},
        },
    },
];




const generatePlayerSeasonReport = (playerName, index) => {

    const listPlayer = teamHistory.find(player => player.name ===  playerName );

    if (!listPlayer) {
        return `Không tìm thấy cầu thủ ${playerName}`;
    }

    const seasons = Object.entries(listPlayer.season);

    const careerTotals = seasons.reduce((acc, season) => {
        acc.totalMatches += season.matches,
        acc.totalGoals += season.goals,
        acc.totalAssists += season.assists,
        acc.totalYellowCards += season.yellowCards

        return acc;
    }, 
    {
        totalMatches: 0,
        totalGoals: 0,
        totalAssists: 0,
        totalYellowCards: 0
    }
);

    const averageGoalsPerMatch =
        (careerTotals.totalGoals / careerTotals.totalMatches).toFixed(2);

    const averageAssistsPerMatch =
        (careerTotals.totalAssists / careerTotals.totalMatches).toFixed(2);

};


generatePlayerSeasonReport




