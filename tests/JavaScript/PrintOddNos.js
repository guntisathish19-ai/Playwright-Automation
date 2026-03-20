function odd() {
    var n = 10;
    for (let i = 0; i <= n; i++) {
        if (i % 2 != 0) {
            console.log(i + " is a Odd number");
        }
    }
}
//odd();

class Even {
    constructor() {
        let i = 1;
        let n = 20;
        while (i <= n) {
            if (i % 2 == 0) {
                console.log(i + " is even number");
            }
            i++;
        }
    }
}
new Even();