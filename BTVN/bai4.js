


const player = [
    {name: "Messi", years: 18 , salary: 100 },
    {name: "Ronaldo", years: 20 , salary: 95 },
    {name: "Neymar", years: 12 , salary: 90 },
    {name: "Mbappe", years: 7 , salary: 85 },
    {name: "Haaland", years: 5 , salary: 80 },
    {name: "Modric", years: 22 , salary: 70 },
    {name: "Benzema", years: 19 , salary: 75 },
];




const analyzeSalary = (minYears, teamPlayers) => {

    const filterPlayer = teamPlayers.filter(players => players.years >= minYears );


    const totalSalary = filterPlayer.reduce((acc, cur) => {
        return acc += cur.salary;
    }, 0);

    const highestPaid = filterPlayer.reduce((max, player) => {
        if (player.salary > max ) {
            return player;
        } else {
            return max; 
        }
    });

    const lowestPaid = filterPlayer.reduce((min, player) => {
        if (player.salary < min.salary) {
            return player;
        } else {
            return min;
        }
    })
    

    return {
        totalSalary,
        highestPaid,
        lowestPaid
    };

};

console.log(analyzeSalary(19,player));


