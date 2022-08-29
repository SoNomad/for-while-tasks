const arr = [1, 10, -1, -3, 4, -5, 1, 3, 4, 6]
let accumulator = 0

let i = 0
while (i < arr.length){
    if(arr[i] > 0) {
        accumulator += arr[i]
    }
    i++
}
console.log(accumulator)