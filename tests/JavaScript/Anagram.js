function anagram(str1, str2){
    if(str1.length!==str2.length) return false

    const sorted1 = str1.split('').sort().join()
    const sorted2 = str2.split('').sort().join()
    if( sorted1 === sorted2) return true
    else return false
}
console.log(anagram("silent", "listed"))