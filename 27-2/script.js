function show_me() {
	var race = document.getElementById('race').value
	var gender = document.getElementById('gender').value

	if (race==1 && gender==1) {
		$("#information").hide()
		var card_var = $(`
						<div class="card" style="width: 18rem;" id="the_card">
     						<img src="https://bloximages.chicago2.vip.townnews.com/stlamerican.com/content/tncms/assets/v3/editorial/f/c8/fc8248fc-bc67-11e8-9cb2-8f0ce9e20555/5ba2e32b7a8a4.image.jpg" class="card-img-top" alt="...">
     						 <div class="card-body">
      						 <h5 class="card-title">Anu Barack</h5>
      						  <p class="card-text">Have drugs. Live in getto. Like killing peoples</p>
     						  <a href="#" class="btn btn-primary" onclick="go_back()">GO BACK</a>
     						</div>
   						 </div>

			`)
		$('#cards').append(card_var)

	}
}
function go_back() {
	$("#information").show()
	$("div#cards").empty()
}