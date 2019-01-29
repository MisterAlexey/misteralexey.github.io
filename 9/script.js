function rand(){
	var max = 3, min = 0;
	var chislo = Math.floor(Math.random() * (max - min)) + min
	if (chislo == 0) {
		document.getElementById('comp_pic').src = "kam.png"
	}
	if (chislo == 1) {
		document.getElementById('comp_pic').src = "nozh.png"
	}
	if (chislo == 2) {
		document.getElementById('comp_pic').src = "bum.png"
	}
	return chislo	
}

var winner = 0;
var looser = 0;
var nich = 0;
function game(user){
	var chislo = rand()
	

        if (user == chislo) {        	
        	alert ("Ничья!")
        	nich +=1;
			document.getElementById("tie").innerHTML = nich
        }
        if (user == 0 && chislo == 1) {        	
        	alert ("Ты победил! Твой камень ломает ножницы!")
        	winner +=1;
			document.getElementById("wins").innerHTML = winner
        }
        if (user == 0 && chislo == 2) {
        	alert ("Ты проиграл! Твой камень обернут в бумагу!")
        	looser +=1;
			document.getElementById("looses").innerHTML = looser
        }
        if (user == 1 && chislo == 0) {
        	alert ("Ты проиграл! Камень ломает твои ножницы!")
        	looser +=1;
			document.getElementById("looses").innerHTML = looser
        }
        if (user == 1 && chislo == 2) {
        	alert ("Ты победил! Твои ножницы режут бумагу!")
        	winner +=1;
			document.getElementById("wins").innerHTML = winner
        }
        if (user == 2 && chislo == 0) {
        	alert ("Ты победил! Твоя бумага побеждаем камень!")
        	winner +=1;
			document.getElementById("wins").innerHTML = winner
        }
        if (user == 2 && chislo == 1) {
        	alert ("Ты проиграл! Твою бумагу порезали ножницами!")
        	looser +=1;
			document.getElementById("looses").innerHTML = looser
        }
    }

		
