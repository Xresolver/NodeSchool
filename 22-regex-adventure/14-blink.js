const { marked } = require('marked');

module.exports = function (str) {
    let html = marked.parse(str);
    let count = 0

    while(/@@/.test(html))
    {
        if(count%2 == 0)
            html = html.replace('@@', '<blink>')
        else
            html = html.replace('@@', '</blink>')

        count++;
    }
    
    return html
}


/* OFFICIEL SOLUTION */
/* ----------------- */
// var marked = require('marked')
// module.exports = function (str) {
//     var md = marked(str)
//     return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
// }