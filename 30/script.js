function create_table(){
    for (var i = 0; i < 10; i++) {
        var tr = $("<tr></tr>")
        for (var j = 0; j < 10; j++) {
          var td = $("<td></td>")
          $(tr).append(td)
        }
      $('tbody').append(tr)
    }
}
create_table() 
for (var i = 1; i < 5; i++) {
       create_ship(i, 5-i)
}
var prev = false,
	cou

function create_ship (count, l){
var a= $('<a></a>'),
	table= $('<table border="1"></table>'),
	tr= $("<tr></tr>");
for (var i = 0; i < l; i++) {
	tr.append('<td></td>')
	}
	table.append(tr);
	a.append($('<h1>'+count+'</h1>'), table)
	a.on('click', (e) =>{
		prev
		// e.currentTagret.children[1].style.borderColor = 'red'
	})
	$('.ships').append(a)

}

