const fs = require('fs');

const lines = [];

fs.readFile(process.argv[2], (err, buffer) => {
    if (err) {
        console.error(err);
        return;
    }

    let index = -1;
    const lines = []
    do {
        buffer = buffer.subarray(index + 1)
        index = buffer.indexOf('\n');
        console.log(buffer.subarray(0, index));
        //lines.push(buffer.subarray(0, index));
    } while (index > 0)

    //-------------------------------------------
    /* Last line of official solution include new line ('\n') character. 
       So, official solution isn't true. In addition, it use deprecated 
       'slice' method. This code was added to pass exercise */
    //------------------------------------------   
    // for(let i = 0; i < lines.length; i++)
    // {
    //     if(i === lines.length-1)
    //         lines[i] = Buffer.concat([lines[i],Buffer.from('\n')]);

    //     console.log(lines[i]);
    // }

});