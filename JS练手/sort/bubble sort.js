//声明一个变量为数组
var sort = [3,9,2,1,4,5,6,8,7,0];
//声明一个变量为数组的下标
var sub= 0;
//声明一个变量为排序进行的轮数
var time = 1;
//声明一个变量为一个数组成员互换值的中介
var medium = null;
//排序进行多少轮比较
while (time<sort.length){
	//我要让每一轮比较都要从数组第一个成员开始
	sub = 0;
	//每轮比较大小需要进行的次数
	while (sub<sort.length-1){
		//如果'前'大于'后'，则交换属性值
		if (sort[sub]>sort[sub+1]){
			medium = sort[sub];
			sort[sub] = sort[sub+1];
			sort[sub+1] = medium;
			sub = sub+1;
		}
		else {
			sub = sub+1;
		}
	}
	time = time+1;
}
//控制台输出排序后的数组
console.log(sort);
