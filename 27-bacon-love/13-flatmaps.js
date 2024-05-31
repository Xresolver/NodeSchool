module.exports = (Bacon, riverFlowInCubicFeet, litresInCubicFeet) => {
    /**
     * Your code here
     **/
    const AVARAGE = 200000;
    const resultingEventStream =
        riverFlowInCubicFeet.flatMap(tuple => {

            const measuredLitres = tuple[0] * litresInCubicFeet;
            
            if(measuredLitres < AVARAGE)
                return Bacon.never()
            else
            {
                const streamArray = []
                for(let i = 0; i < tuple[1]; i++)
                    streamArray.push(Math.round(measuredLitres))
                return Bacon.sequentially(10, streamArray);
            }    
            
        })
    return resultingEventStream;
};


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = (Bacon, riverFlowInCubicFeet, litresInCubicFeet) =>
//     riverFlowInCubicFeet
//         .flatMap(tuple => {
//             const cubicFeet = tuple[0];
//             const numberOfSamples = tuple[1];

//             const litres = Math.round(cubicFeet * litresInCubicFeet);

//             if (litres > 200000) {
//                 return Bacon.interval(100, litres).take(numberOfSamples);
//             } else {
//                 return Bacon.never();
//             }
//         });