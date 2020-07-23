// 快速排序的3个基本步骤：
// 1.从数组中选择一个元素作为基准点
// 2.排序数组，所有比基准值小的元素摆放在左边，而大于基准值的摆放在右边。每次分割结束以后基准值会插入到中间去。
// 3.最后利用递归，将摆放在左边的数组和右边的数组在进行一次上述的1和2操作。

// 快速排序实现方式一
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr
    }

    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []

    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

// 缺点：

// 获取基准点使用了一个splice操作，在js中splice会对数组进行一次拷贝的操作，而它最坏的情况下复杂度为O(n)，而O(n)代表着针对数组规模的大小进行了一次循环操作。
// 首先我们每次执行都会使用到两个数组空间，产生空间复杂度。
// concat操作会对数组进行一次拷贝，而它的复杂度也会是O(n)
// 对大量数据的排序来说相对会比较慢

// 快速排序实现方式二
function swap(arr, i, j) {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
/**
 *
 * @param {*} arr  数组
 * @param {*} fromIndex  起始下标
 * @param {*} toIndex  结束下标 + 1
 */

 function divide(arr, fromIndex, toIndex) {
    const pivot = arr[toIndex - 1]
    let i = fromIndex - 1

    for(let j = fromIndex; j < toIndex - 1; j++) {
        if(arr[j] <= pivot) {
            i++
            swap(arr, i, j)
        }
    }

    swap(arr, i+1, toIndex-1)

    return i+1
 }
/**
 * 
 * @param {*} arr  数组
 * @param {*} fromIndex  起始下标
 * @param {*} toIndex  结束下标 + 1
 */

 function qsort(arr, fromIndex = 0, toIndex) {
    let index = toIndex || arr.length

    if(fromIndex < toIndex-1) {
        const q = divide(arr, fromIndex, index)
        qsort(arr, fromIndex, index)
        qsort(arr, q+1, index)
    }

    return arr
 }

 //  //  // 
 function quickSort(arr, low, high) {
    let i = low
    let j = high
    let pivot = arr[low]

    if(i >= j) {
        return
    }

    while(i < j) {
		while(arr[j] > key && i < j) { //从右边向左找第一个比key小的数，找到或者两个哨兵相碰，跳出循环
			j--;
		}
		while(arr[i] <= key && i < j) {  //从左边向右找第一个比key大的数，找到或者两个哨兵相碰，跳出循环,这里的=号保证在本轮循环结束前，key的位置不变，否则的话跳出循环，交换i和from的位置的时候，from位置的上元素有可能不是key
			i++;
		}
		/**
		  代码执行道这里，1、两个哨兵到找到了目标值。2、j哨兵找到了目标值。3、两个哨兵都没找到(key是当前数组最小值)
		**/
		if(i < j) { //交换两个元素的位置
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

		}
	}

    arr[low] = arr[i]
    arr[i] = pivot
    quickSort(arr, low, i-1)
    quickSort(arr, i+1, high)
 }



