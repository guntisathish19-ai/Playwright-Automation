class RemoveDups{
    removeDups(arr){
        let temp = [];
        let j=0;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]!=arr[i+1]){
                temp[j]=arr[i];
                j++;
            }
        }
        temp[j]=arr[arr.length-1];
        console.log(temp);
    }
    
}
let arr = [5, 5, 10, 12, 12, 20]
const obj = new RemoveDups();
obj.removeDups(arr);