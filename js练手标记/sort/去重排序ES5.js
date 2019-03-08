
var array = [1,5,2,3,4,2,3,1,3,4]
function unique(arr){
	var newArr=[];
	arr.sort(function(x,y){return x-y})//1122333445
	arr.forEach(function (v,k,arr){
			if(v !== arr[k+1]){
				newArr.push(v)
			}
	})
	return newArr	
}
var a = unique(array);//不仅去重，而且从小到大排序