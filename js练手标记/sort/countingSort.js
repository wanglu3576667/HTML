/*将下列数组排序，我们使用计数排序(COUNTING SORT)的算法,
首先将原数组的成员依次放入到另外一个数组中，在这个
过程中原数组成员会以新数组的下标形式呈现，相对应的属性值则
代表原数组进入到新数组的相同值的个数。我们利用数组下标的规律，
当所有成员导入完毕，大小的顺序就已经排好了，最后将把它们按顺序
导出，即排序完毕*/
var arr=[9,2,2,3,1,1,7,8,0,5,6];
var newArr=[];
var index=0;
while (index<arr.length){
	if (newArr[arr[index]]==undefined)
		newArr[arr[index]]=1;
	else
		newArr[arr[index]]++;
	index++;
}
index=0;
arr=[];
while (index<newArr.length){
	while (newArr[index]>0){
		arr.push(index)
		newArr[index]-=1;
	}
	index++;
}
	

console.log(arr)