var json = require('file.json')
var data = JSON.parse(json)
function create_table(){
    for (var i = 0; i < data.length; i++) {
        var tr = $("<tr></tr>")
        var food_name = $("<td></td>").text(data[i].food_name),
            calories = $("<td></td>").text(data[i].Calories),
            total_fat = $("<td></td>").text(data[i].total_fat);
        $(tr).append(food_name, calories, total_fat)
        $('tbody').append(tr)

    }
    console.log(data[0].total_fat)
}
