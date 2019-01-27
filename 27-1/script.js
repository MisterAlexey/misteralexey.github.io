	$.get({
	url: 'https://api.vk.com/method/friends.get',
	method: 'GET',
	dataType: 'jsonp',
	success: (data) =>{
		console.log(data)
		for (var i = 0; i < data.response.items.length; i++) {
			var li = $('<li class="list-group-item"></li>').text(data.response.items[i].first_name + " " + data.response.items[i].last_name)
        	$('ul').append(li)
    	}
    	var index = [];
		$('input').on('keyup', () => {
		    for (var i = 0; i < data.response.items.length; i++) {
		      $('ul > li').eq(i).show()
		    }
 		 var index = [];
		  for (var i = 0; i < data.response.items.length; i++) { 
		  var name = data.response.items[i].first_name.toLowerCase() + " " + data.response.items[i].last_name.toLowerCase(),
		        value = $('input').val()
		    if(name.indexOf(value.toLowerCase()) == -1){
		      index.push(i)
		    }
		    if(i == data.response.items.length-1){
		      for (var j = 0; j < index.length; j++) {
		        $('ul > li').eq([index[j]]).hide()
		      }
		    }
		  }
		})
	}
}, 
{
	access_token: '<access_token>',
	v: 5.37,
	fields: 'domain'
})
