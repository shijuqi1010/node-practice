const arr1 = ['a', 'b', 'c']
const arr2 = ['b', 'c', 'a']

console.log(
    arr1.sort() === arr1,
    arr2.sort() == arr2,
    arr1.sort() === arr2.sort()
);


// true true false

// 解析
// 1. array 的sort方法对原始数组进行排序，并返回对该数组的引用。
// 调用arr2.sort()时, arr2数组内的对象将会被排序。
// 2. 当比较对象时，数组的排序顺序并不重要。
// 由于arr1.sort() 和 arr1 指向内存中的同一对象, 因此第一个相等测试返回true，第二个比较也是如是：arr2.sort() 和 arr2 指向内存中的同一对象
// 3. 在第三个测试中，arr1.sort() 和arr2.sort()的排序顺序相同；但是，他们指向内存中的不同对象。因此，第三个测试的评估结果为false
