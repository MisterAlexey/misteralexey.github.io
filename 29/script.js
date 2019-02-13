// var count = 0;

function create_table(){
    for (var i = 0; i < 3; i++) {
        var tr = $("<tr></tr>")
        for (var j = 0; j < 3; j++) {
          var td = $("<td></td>")
          $(tr).append(td)
          // count++
        }
      $('tbody').append(tr)
    }
}

// var td_value = 'x'
// function game(x){
//   document.getElementsByTagName('td')[x].innerHTML = td_value
//   if (td_value == 'X') {
//     td_value = '0' 
//   } else {td_value = 'X'}
  
// }
var player = 'x'
$('table').on('click', 'td', function(){
  if ($(this).text() == '') {
    player = player == 'x'? 'o':'x';
    $(this).text(player)
    checkWin(player)
  } else {
    alert('Не пусто')
  }
  
})

function checkWin(player) {
  var wins = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ], check = 1, win = false;

  for (var i = 0; i < wins.length; i++) {
    for (var j = 0; j < wins[i].length; j++) {
      if($('td').eq(wins[i][j]).text() == player){
        ++check;
        if(check == 3){
          win = true;
        }
      }
    }
    check = 0;
  }
  if(win){
    alert(player+" победил")
  }
}