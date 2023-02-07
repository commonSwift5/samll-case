// 默认情况下，声明函数的时候有几个参数，调用的时候就需要有几个参数
// function add(n1: number, n2: number): void {
//   console.log(n1 + n2)
// }

// add(1, 2)

// slice(begin, end)
// slice()
// slice(begin)
// slice(begin, end)
// 通过?就可以指定可选参数
// function slice(begin?: number, end?: number): void {
//   console.log(begin)
//   console.log(end)
// }

// slice()

// 指定函数的默认值
// function slice(begin: number = 0, end: number = 2): void {
//   console.log(begin)
//   console.log(end)
// }

// slice()
// slice(100)
// slice(1000, 2000)

// 求三个数中最大的数
type Nn = (a: number, b: number, c: number) => number
function max(n1: number, n2: number, n3: number): void {
    // console.log(Math.max(n1, n2, n3))
    const m = n1 > n2 ? n1 : n2
    console.log(m > n3 ? m : n3)
}
max(1, 2, 3)
const min: Nn = (a, b, c) => {
    const m = a < b ? a : b
    return m < c ? m : c
}
const x: number = min(4, 5, 6)
console.log(x)
// 对象里面的 方法属性指定
type Oj = {
    name: string
    sayHi: Nn
}
const obj1: Oj = {
    name: 'zhangan',
    sayHi(a, b, c) {
        return a + b + c
    },
}
