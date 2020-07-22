let testObject = { ...null, ...undefined }
console.log(testObject); // {}

let testArray = [...null, ...undefined]
console.log(testArray);   // 抛出异常


// 解析
// {}  抛出异常
// 对象会忽略null和undefined，数组会抛出异常。这是ECMA的规范定义，所以在使用扩展运算符时要多注意
