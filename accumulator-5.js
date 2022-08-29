const arr = [1, 10, -1, -3, 4, -5, 1, 3, 4, 6]
const accumulatorEven = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        accumulatorEven.push(arr[i])
    }
}
console.log(accumulatorEven)