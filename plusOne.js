// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1:

// 输入: [1, 2, 3]
// 输出: [1, 2, 4]
// 解释: 输入数组表示数字 123。
// 示例 2:

// 输入: [4, 3, 2, 1]
// 输出: [4, 3, 2, 2]
// 解释: 输入数组表示数字 4321。


var plusOne = function (digits) {
    // 数值6145390195186705544超出Number基本类型的容纳范围，改用BigInt基本类型
    let num = BigInt(digits.join(''));
    // BigInt基本类型进行数学操作时，需要在数字字面量后加个n
    let string = String(num + 1n);
    let ary = string.split('');

    return ary.map(str => Number(str));
};

let nums = [1, 2, 3]

// nextGreaterElement(nums1, nums2)
console.log(plusOne(nums));