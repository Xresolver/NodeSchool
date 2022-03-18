const fs = require('fs');
const path = require('path');

module.exports = function (dirName, extName, filtered)
    {
        const ext = '.' + extName;
        fs.readdir(dirName, callback)

        function callback(err, list)
        {
            if(err) return filtered(err)

            const filteredList = [];
            list.forEach(function filterList(currentValue)
                {
                    if(path.extname(currentValue) === ext)
                        filteredList.push(currentValue)
                });
        
            return filtered(null, filteredList)
        }
    }