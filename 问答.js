// 深拷贝和浅拷贝是什么？写一个递归函数实现深拷贝

// 深拷贝复制值
// 浅拷贝复制地址

function deepCopy(obj) {
    // 判断拷贝的数据是对象还是数组 生成定义的数据
    var copy = Array.isArray(obj) ? [] : {}
    for (key in obj) {
        // 循环的时候如果此项为引用类型，需要在一定的将引用类型里面的值取出来
        if (typeof obj[key] == 'object') {
            // 再次调用该方法取数据
            copy[key] = deepCopy(obj[key])
        } else {
            copy[key] = obj[key]
        }
    }
    return copy
}
var b = deepCopy(obj)
console.log(b);



// currying(柯里化)的特性一般有哪些？使用场景适合用在哪里？





// “节流”是什么？写出个简单实现






// 使用es5实现es6的promise对象




