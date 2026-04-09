class Anagram{
    isAnagrsm(str1, str2){
        str1=str1.toLowerCase()
        str2=str2.toLowerCase()
        if(str1.length!==str2.length)
            return false
        const st1=str1.split('').sort().join()
        const st2=str2.split('').sort().join()
        if(st1===st2)
            return true
        else
            return false
    }
}
const str1="listen"
const str2="silent"
const obj = new Anagram()
//console.log(obj.isAnagrsm(str1, str2))
const result = obj.isAnagrsm(str1, str2)
if(result === true)
    console.log("Anagram")
else
    console.log("Not Anagram")