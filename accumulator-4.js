const arr = ['Мансур', 'Мансур', 'Мансур', 'Ахмед', 'Ахмед', 'Ахмед', 'Хасамбек']
const accumulator = []


for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'А') {
        accumulator.push(arr[i])
    }
}
console.log(accumulator)