module.exports = (Bacon, enteringShips, destroyerPosition) => {
    /**
     * Your code here
     */

    const shipTally = enteringShips
        .scan(0, (acc, ship) => 
        {
            if(ship.type === "zrrk")
                return ++acc;
            else
                return acc;
        })
        

    const postArrivalShips = enteringShips.filter(destroyerPosition
        .filter(distance => distance < 1).map(t => true))

    const threatReport = postArrivalShips.take(5)
        .fold({}, (acc, ship) =>
        {
            // "zrrk|earthian|purple|martian"
            if(ship.type === "zrrk")
            {
                if(acc.zrrk)
                    return {zrrk: ++acc.zrrk, ...acc};
                else
                    return {zrrk: 1, ...acc};
            }    
            else if(ship.type === "earthian")
            {
                if(acc.earthian)
                    return {earthian: ++acc.earthian, ...acc};
                else
                    return {earthian: 1, ...acc};
            }
            else if(ship.type === "purple")
            {
                if(acc.purple)
                    return {purple: ++acc.purple, ...acc};
                else
                    return {purple: 1, ...acc};
            } 
            else if(ship.type === "martian")
            {
                if(acc.martian)
                    return {martian: ++acc.martian, ...acc};
                else
                    return {martian: 1, ...acc};
            } 
        });

    return {
        shipTally, //The running tally of ships goes here
        threatReport //The report of ships immediately following the Destroyer goes here
    };
};


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = (Bacon, enteringShips, destroyerPosition) => {
//     const shipTally = enteringShips
//         .filter(ship => ship.type === 'zrrk')
//         .map(1)
//         .scan(0, (acc, v) => acc + v);

//     const destroyerHasEntered = destroyerPosition.map(distance => distance < 1);

//     const threatReport = enteringShips
//         .filter(destroyerHasEntered)
//         .take(5)
//         .fold({}, (report, ship) => {
//             if (!report[ship.type]) {
//                 report[ship.type] = 0;
//             }
//             report[ship.type] += 1;
//             return report;
//         });

//     return {shipTally, threatReport};
// };