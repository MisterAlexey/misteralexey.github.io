var express = require('express')
var app = express()
var fs = require('fs')


function strToInt(arr){
	var array = [];
	for (var i = 0; i < arr.length; i++) {
		array.push(parseInt(arr[i]))
	}
	return array;
}

var zero = 0
var seven = 0
var before_0 = 0
var after_7 = 0
var temp_0 = 0


function sorting(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==0) {
			if (temp_0==0) {
				before_0 = arr[i-1]
				temp_0++
			}
			arr.splice(i, 1)
			i--
			zero++
			
		}
		if (arr[i]==7) {	
			arr.splice(i, 1)
			i--
			seven++
			after_7 = arr[i+1]
		}
	}
	for (var i = 0; i < arr.length; i++) {
		var tmp = arr[i]
		j=i
		while (j>0 && arr[j-1]>arr[j]){
			arr[j] = arr[j - 1]
			arr[j-1] = tmp
	        j--;
		}
	} 
	return arr
}


app.get('/', (req, res) => {
	fs.readFile('file.txt', 'utf-8', (err, data) =>{
		var array = data.split(' ')

		array = strToInt(array);

		res.send(JSON.stringify(sorting(array))+ "Количество нулей - " +zero+" тогда как количество семерок -"+seven+'. Число перед первым нулем - '+before_0+ ', а чисто после последней семерки - '+after_7)
	})
})
app.listen(3000, () => {
	console.log('Hi, i am working')
})