const arr = [1, 10, -1, -3, 4, -5, 1, 3, 4, 6]


for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}
let i = 0
while (i < arr.length){
    if(arr[i] % 2 != 0) {
        console.log(arr[i])
    }
    i++
}