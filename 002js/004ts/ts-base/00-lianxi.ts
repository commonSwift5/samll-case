function separateDigits(nums: number[]): number[] {
    let arr: number[] = []
    for (var i = 0; i < nums.length; i++) {
        var arr1 = nums[i].toString().split('')
        for (var j = 0; j < arr1.length; j++) {
            arr.push(~~arr1[j])
        }
    }
    return arr
}
let arr2 = separateDigits([13, 25, 83, 77])
console.log(arr2)
