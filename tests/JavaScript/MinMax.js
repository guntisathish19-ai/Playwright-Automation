class MinMax{
    constructor(){
        this.minMax();
    }

    minMax(){
        
        let a=[30,10, 12, 1, 1, 10, 9, 20]
        let min=a[0], max=a[0]
        for (let i=0; i<a.length; i++){
            if(min>a[i])
                min=a[i]
            if(max<a[i])
                max=a[i]
        }
        console.log("min and max:"+min+","+max)

    }
}
new MinMax()