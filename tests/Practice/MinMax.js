function minMax(a){
    
    let min = a[0];
    let max = a[0];
    for (let i=0; i<a.length; i++){
        if(a[i] < min){
            min = a[i];
        }
        if(a[i]>max)
            max=a[i];
        
    }
    console.log("Minimum value is "+min); 
    console.log("Maximum value is "+max);
}
let a = [10, 20, 5, 8, 7];
minMax(a);