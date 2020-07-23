function getName() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
    return {
        name: 'paopao'
    }
}

console.log(getName());


/*
答案：undefined 0 1 2 3 4
解析：
1.第一个点：undefined，这是因为return后换行了,JavaScirpt会在return语句后自动插入了分号。
分号自动添加的情况：
（1）如果下一行的开始与本行的结尾连在一起解释，JavaScript就不会自动添加分号；
（2）只有下一行的开始于本行的结尾无法放在一起解释，JavaScript引擎才会自动添加分号；
（3）如果一行的起首是++或--运算符，则他们后面自动添加分号；
（4）如果continue、break、return、throw这四个语句后面，直接跟换行符，则会自动添加分号。

2.第二个点：let的变量除了作用域是在for区块中，
而且会为每次循环执行建立新的词法环境(LexicalEnvironment)，  
因为用let声明的，所以每个i一个作用域。
这里如果是用var声明，则最后输出的都是5。

*/