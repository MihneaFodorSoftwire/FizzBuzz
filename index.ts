function fizzbuzz(): void {
    for (let i = 1; i < 100; ++i) {
        let ok: boolean = false;
        let output: string = '';
        let outputB: string = '';
        if (i % 3 == 0) {
            ok = true;
            output += "Fizz";
        }
        if (i % 5 == 0) {
            ok = true;
            outputB += "Buzz";
        }
        if (i % 7 == 0) {
            ok = true;
            outputB += "Bang";
        }
        if (i % 11 == 0) {
            ok = true;
            outputB = "Bong";
        }
        if (i % 13 == 0) {
            ok = true;
            output += "Fezz";
        }
        if (i % 17 == 0) {
            ok = true;
        }
        if (ok) {
            console.log(output + outputB);
        }
    }
}

fizzbuzz();
