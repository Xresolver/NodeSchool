process.stdin.on("data", buffer => 
    {
        const typedArray = new Uint8Array(buffer);
        console.log(JSON.stringify(typedArray));
    })