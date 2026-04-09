class MinMax{
    minmax(arr){
        let min=arr[0];
        let max=arr[0];
        for(let i=0; i<arr.length; i++){
            if(arr[i]<min)
                min=arr[i]
            if(arr[i]>max)
                max=arr[i]
        }
        console.log(min)
        console.log(max)

    }
}
let arr=[5, 10, 5, 4, 10, 11, 4];
const obj = new MinMax();
obj.minmax(arr);
