module.exports = (Bacon, sector1Count, sector2Count, sector3Count, sector4Count) => {
    const deploymentReport = Bacon.combineTemplate(
        {
            sector1: sector1Count, 
            sector2: sector2Count, 
            sector3: sector3Count,
            sector4: sector4Count,
            sector5: 0
        });

    return deploymentReport;
};