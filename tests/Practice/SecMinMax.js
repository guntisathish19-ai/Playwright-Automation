class SecMinmax{
    minmax(arr){
        let min = Infinity
        let smin = Infinity
        let max = -Infinity
        let smax = -Infinity
        for(let i=0; i<arr.length; i++){
            let val=arr[i]
            if(arr[i]<min){
                smin=min
                min=arr[i]
            }
            else if(val<smin&&val>min)
                smin=arr[i]
            if(arr[i]>max){
                smax=max
                max=arr[i]
            }
            else if(val>smax&&val<max)
                smax=arr[i]
        }
        console.log(smax)
        console.log(smin)
    }
}
let arr=[10, 5, 5, 11, 4, 6, 4, 15]
const obj = new SecMinmax()
obj.minmax(arr)