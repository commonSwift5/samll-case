// 如果一个函数的返回值类型是 void, 那这个函数可以没有返回值，也可以返回undefined  直接return
// 如果一个函数的返回值类型 undefined, 那么这个函数就必须返回undefined
function sayHi(name: string): void {
    console.log('你好', name)
    // 一个函数没有返回值，默认返回是undefined
}
function dieJa(a: number, b: number, c: number) {
    const ar = [a, b, c]
    return ar
}
let js = dieJa(1, 2, 4)
console.log(js)
// 对象
function duiXiang(a: string, b: number) {
    return {
        name: a,
        age: b,
    }
}
const abc = duiXiang('zs', 18)
console.log(abc)
