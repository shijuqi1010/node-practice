let pp = {
    x: 1,
    y: 2
}

// 以下两段代码会抛出异常吗？
let ppWithXGetter1 = {
    ...pp,
    get x() {
        throw new Error()
    }
}

let ppWithXGetter2 = {
    ...pp,
    ...{
        get x() {
            throw new Error()
        }
    }
}


// 解析
// ppWithXGetter1不会报错
// ppWithXGetter2会

// 第一段代码实际等价于

// let ppWithXGetter1 = {}
// Object.assign(ppWithXGetter1, pp)
// Object.defineProperty(ppWithXGetter1, "x", {
//     get() { throw new Error() },
//     enumerable: true,
//     configurable: true
// })

// 第二段代码会报错实际解构如下代码时.x被调用了
// ...{
//     get x() {
//         throw new Error()
//     }
// }