function duplicates(){
    let a=[10, 20, 10, 21, 20, 7, 7, 9]
    //a.sort((a,b)=>a-b)
    for(let i=0;i<a.length-1;i++){
        for(let j=0; j<a.length-1-i;j++){
            if(a[j]>a[j+1]){
                let tem=a[j]
                a[j]=a[j+1]
                a[j+1]=tem
            }

        }
    }
    console.log(a)
    let temp = new Array(a.length) 
    let k=0
    for ( let i=0; i<a.length-1; i++){
        if(a[i]!=a[i+1]){
            temp[k]=a[i]
            k++
        }

    }
     temp[k]=a[a.length-1]
        console.log(temp)
}
duplicates()
