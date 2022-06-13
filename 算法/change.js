let num = 10000000
let str =  num.toString()
let arr = str.split("")
//把num 转成 10,000,000
let newArr = []
let len = arr.length
let i = 0
while(i < len){
    newArr.push(arr[i])
    i++
    if(i % 3 === 0 && i !== len){
        newArr.push(",")
    }
}
console.log(newArr.join(""))
