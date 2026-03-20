class LargestSecondLarges{
    constructor(){
        this.largest()
    }
    largest(){
        let arr= [40, 10, 20, 5, 15]
        let largest=arr[0], secondLargest=[0]

        for(let i=1;i<arr.length;i++){
            if(arr[i]>largest){
                secondLargest=largest
                largest=arr[i]
            }
            else if(arr[i]>secondLargest)
                secondLargest=arr[i]
        }
        console.log("Largest:"+largest)
        console.log("Second Largest:"+secondLargest)
    }
}
new LargestSecondLarges()