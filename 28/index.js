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

function sorting(arr) {
	for (var i = 1; i < arr.length; i++) {
		if (arr[i]==0 ) {
			arr.splice(i, 1)
		}
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

		res.send(JSON.stringify(sorting(array)))
	})
})
app.listen(3000, () => {
	console.log('Hi, i am working')
})