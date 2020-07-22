const arrLick = {
    length: 4,
    0: 0,
    1: 1,
    '-1': 2,
    3: 3,
    4: 4,
}

console.log(Array.from(arrLick))
console.log(Array.prototype.slice.call(arrLick))


// 答案
// [ 0, 1, undefined, 3 ]
// [ 0, 1, <1 empty item>, 3 ]