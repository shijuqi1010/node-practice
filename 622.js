// ?.  一个问号是可选链式操作符
// ??  两个问号是空值合并符

var obj = {};
var x = +obj.paopao ?.name ?? '跑跑';

console.log(x);

// 相当于：
// var x = "";
// if(obj.paopao){
//    if(obj.paopao.name){
//  x = obj.paopao.name
//    }else{
//      x = "跑跑"
//    }
// }

