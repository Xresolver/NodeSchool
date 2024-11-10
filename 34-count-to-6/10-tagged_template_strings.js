console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(...args) 
{
    return args[0][0]
        .concat(replaceEscape(args[1]))
        .concat(args[0][1])
        .concat(replaceEscape(args[2]))
        .concat(args[0][2])
}

function replaceEscape(str)
{
    return str.replaceAll(`&`, `&amp;`)
              .replaceAll(`'`, `&apos;`)
              .replaceAll(`"`, `&quot;`)
              .replaceAll(`<`, `&lt;`)
              .replaceAll(`>`, `&gt;`)
              
}


/* OFFICIEL SOLUTION */
/* ----------------- */
// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// function html(pieces, ...substitutions) {
//     var result = pieces[0];
//     for (var i = 0; i < substitutions.length; ++i) {
//         result += escape(substitutions[i]) + pieces[i + 1];
//     }

//     return result;
// }

// function escape(s) {
//     return s.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/'/g, "&apos;")
//             .replace(/"/g, "&quot;");
// }