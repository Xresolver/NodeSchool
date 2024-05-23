module.exports = (Bacon, enteringShips, destroyerPosition) => 
{
    const enteringShipsCode = enteringShips
        .map(ship =>
        {
            if(ship.type === "zrrk")
                return 1;
            else
                return 0;
        });

    const destroyerPositionThreatLevel = destroyerPosition.map(distance =>
        {
            if(distance > 5)
                return 'low';
            else if(distance <= 5 && distance > 2)
                return 'medium'
            else if(distance <= 2 && distance >= 1)
                return 'high'
            else
                return 'extreme'
        });


    return {
        ships: enteringShipsCode,// Your ship counter goes here
        threat: destroyerPositionThreatLevel,// Your threat level goes here
        postArrivalShips: enteringShipsCode.filter(destroyerPositionThreatLevel
            .filter(threat => threat==='extreme').map(t => true)) // Your ship counter post arrival goes here
    };
};