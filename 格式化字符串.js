// 格式化字符串
const str = '1234567890'
function formatNumber(str) {
    let arrStr = str.split('')
    let reverseStr = arrStr.reverse()
    let tempStr = []

    reverseStr.forEach((item, index) => {
        if (index != 0 && index % 3 == 0) {
            tempStr.push(',')
        }
        tempStr.push(item)

    })

    return tempStr.reverse().join('')
}

console.log(formatNumber(str));