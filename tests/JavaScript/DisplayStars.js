function stars() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <=5-i; j++)
            //console.log(" ");
            row += " ";
        for (let k = 1; k <= i; k++)
            //console.log("*");
            row += "* ";
        console.log(row);
    }
}
stars();