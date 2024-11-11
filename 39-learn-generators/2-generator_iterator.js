function* factorial(n) {
    let result = 1

    for (let i = 1; i <= n; i++) {
        yield i * result;
        result *= i;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}
