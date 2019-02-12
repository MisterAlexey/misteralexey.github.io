var count = 0;

function create_table(){
    for (var i = 0; i < 3; i++) {
        var tr = $("<tr></tr>")
        for (var j = 0; j < 3; j++) {
          var td = $("<td id='number_"+count+"' onclick='game("+count+")'></td>")
          $(tr).append(td)
          count++
        }
      $('tbody').append(tr)
    }
}

var td_value = 'X'
function game(x){
  document.getElementsByTagName('td')[x].innerHTML = td_value
  if (td_value == 'X') {
    td_value = '0' 
  } else {td_value = 'X'}
  
}