function secondMin(){
    let a=[10, 20, 6, 10, 9, 7, 5, 17]
    let min=a[0], secondMin=a[0]
    for(let i=0; i<a.length-1; i++){
        if(a[i]<min){
            secondMin=min
            min=a[i]
        } 
        else if(a[i]<secondMin)
            secondMin=a[i]
    }
    console.log(secondMin)
    console.log(min)
}
secondMin()