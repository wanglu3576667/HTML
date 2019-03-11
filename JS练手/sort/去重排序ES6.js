 var array = [1,5,2,3,4,2,3,1,3,4]

 function unique(array){
 	var newArray=[]
 	var set = new Set(array)  //set不是真数组，所以把它变成真数组
 	set.forEach(function (v){
 		newArray.push(v)
 	})
 	return newArray
 }
var a = unique.call(undefined,array)//[1,5,2,3,4] 


 //用Aarray.from方法转换成数组
/*
					 function unique(array){
					 	var set = new Set(array)
					 	var newArray = Array.from(set)
						console.log(newArray)
					 	return newArray
					 }
																		*/
 