// 开发中容易出错的地方
function addToList(item, list) {

    return list.push(item)
}

const result = addToList("tongxue", ["paopao"])
console.log(result);  // 2


// 解析：
// push() 方法返回新数组的长度。
// 如果想从函数返回数组而不是数组长度，那么应该在 push(item) 之后返回 list
