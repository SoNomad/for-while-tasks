const arr = [1, 10, -1, -3, 4, -5, 1, 3, 4, 6]
const accumulatorOdd = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        accumulatorOdd.push(arr[i])
    }
}
console.log(accumulatorOdd)