const express = require('express');
const fs = require('fs');

const app = express();

app.get('/books', function(req, res)
    { 
        fs.readFile(process.argv[3], 'utf8', function (err, data)
            {
                if(err) return res.sendStatus(500);

                try { res.json(JSON.parse(data)); } 
                catch (err) { res.sendStatus(500); }
                
            })
    });
app.listen(process.argv[2] || 3000);