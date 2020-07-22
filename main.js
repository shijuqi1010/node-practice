var fs = require("fs");

// 阻塞实例
// var data = fs.readFileSync('input.text');
// console.log(data.toString());

// 非阻塞
fs.readFile('input.text', function (err, data) {
    if (err) return console.error(err)
    console.log(data.toString());
})
console.log("程序执行结束");