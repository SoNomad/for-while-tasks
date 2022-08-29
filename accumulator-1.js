const arr = [1, 10, -1, -3, 4, -5, 1, 3, 4, 6]
let accumulator = 0
for (let i = 0; i < arr.length; i++) {
    accumulator += arr[i]
}

console.log(accumulator)