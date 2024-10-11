exports.parse = function(str)
    {
        const arr = str.split('\n');
        return arr.map(JSON.parse);
    }

exports.stringify = function(rows)
    {
        return rows.map(JSON.stringify).join('\n');
    }
