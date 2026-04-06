function polindrome(str){
    let original = str;
    let reversed = "";
    while(str>=1){
        let rem = str%10;
        reversed=reversed*10+rem;
        str=Math.floor(str/10);
    }
    if(original === reversed){  
        console.log(original+" is a polindrome");
    }
    else{
        console.log(original+" is not a polindrome");
    }
}
polindrome(1232);