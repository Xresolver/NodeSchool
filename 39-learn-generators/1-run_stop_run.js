function* range(from, to) {
    // your code goes here
    let i = from;
    while(i <= to)
        yield i++;
}

for (let r of range(5, 10)) {
    console.log(r);
}


/* OFFICIEL SOLUTION */
/* ----------------- */
// function* range(from, to) {
//     for (var i = from; i <= to; i++) {
//         yield i;
//     }
// }

// for (var r of range(5, 10)) {
//     console.log(r);
// }