class SortArray {
    constructor() {

    }
    sortArray(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }

        }
        console.log(arr);
        for (let i of arr)
            console.log(i + ",");
    }
}
const obj = new SortArray();
let arr = [10, 5, 5, 8, 15, 15, 10];
obj.sortArray(arr);