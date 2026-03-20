class StringReverse{
    constructor(){
        this.stringReverse();
    }
    stringReverse(){
        const str = "Sathish";
        let reverse = "";
        for(let i=str.length-1; i>=0; i--)
            reverse=reverse+str.charAt(i)
        console.log(reverse)

    }
}

//const sr = 
new StringReverse();
//sr.;