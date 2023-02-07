// type a = 'up' | 'down'
// console.log(a)

// // 定义枚举类型
enum Direction {
    // 指定枚举类型的值
    Up,
    Down,
    Left,
    Right,
}

function changeDirection(direction: Direction) {
    console.log(direction)
}
