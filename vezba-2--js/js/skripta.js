

function mojaFunkcija13(){
	var voce=["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var povrce=["Grasak", "Krompir", "Sangarepa", "Celer"];
	var vocePovrce=voce.concat(povrce);
	var izuciElement=vocePovrce.slice(2,7);
	document.getElementById("demo13").innerHTML=izuciElement;								
}

function mojaFunkcija1(p1, p2) {
	return p1 * p2;
}



function mojaFunkcija2(p1, p2) {
	return p1 * p2;
}
function vrati_rezultat(p1,p2){
	document.getElementById("demoA").innerHTML = mojaFunkcija2(p1, p2);
}

function Maja(p1,p2){
	document.getElementById("demoB").innerHTML = p1*p2;
}


function Maja2(){
	var p1=5, p2=6;
	document.getElementById("demoC").innerHTML = p1*p2;
}					



function multiplyBy() {
	num1 = document.getElementById("firstNumber").value;
	num2 = document.getElementById("secondNumber").value; 
	document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy() { 
	num1 = document.getElementById("firstNumber").value;
	num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 / num2;
}

function mojaFunkcija3(){
	var cars=["Saab","Volvo","BMW"];
	var x=cars[1];
	document.getElementById("demo3").innerHTML=x;											
}
function mojaFunkcija4(){
	var cars=["Saab","Volvo","BMW"];
	cars[0]="Ford";
	document.getElementById("demo4").innerHTML=cars;											
}

function mojaFunkcija5(){
	var cars=["Saab","Volvo","BMW","Mercedes"];
	alert(cars.length);
}
function mojaFunkcija6(){
	var vocke=["jabuka","banana","kivi","kruska"];
	vocke.pop();
	document.getElementById("demo6").innerHTML=vocke;	
}

function mojaFunkcija7(){
	 var voce = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	 var x = voce.splice(1, 3);
	 document.getElementById("demo7").innerHTML = x;	
}

function mojaFunkcija7a(){
	 var voce = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	 var citrus = voce.slice(1, 3);
	document.getElementById("demo7a").innerHTML = citrus;	
}

function mojaFunkcija8(){
	var vocke=["jabuka","banana","kivi","kruska","papaja","ananas","tresnja","mango"];
    vocke.sort();
	document.getElementById("demo8").innerHTML=vocke;											
}

function mojaFunkcija9(){
	var x = new Date();
	alert(x);								
}

function mojaFunkcija10(){
	var x = new Date();
	year = x.getFullYear(); 
	alert(year);
}

function mojaFunkcija11(){
	var x = new Date();
	month= x.getMonth();
	alert(month);
}	

function mojaFunkcija12(){
	var x=15, y=2;
	if (x > y) {
	alert("Hello World");
	}
}

function mojaFunkcija14(){
	var x=15, y=2;
		if (x > y) {
		pozdrav="Hello World ";
		}
		else {
		pozdrav="Goodbye";
		}
document.getElementById('demo14').innerHTML=pozdrav;	
}	

function mojaFunkcija15(){
	var voce='Jabuka';
			switch (voce) { 
				case "Banana": tekst="Hello Bananna";
				break;  
				case "Jabuka": tekst="Welcome Jabuka";
				break;    
			}	
			document.getElementById("demo15").innerHTML = tekst;										
}	

function mojaFunkcija16(){
	var voce='Kruska';
	switch (voce) { 
		case "Banana": tekst="Hello Bananna";
		break;  
		case "Jabuka": tekst="Welcome Jabuka";
		break;
		default: tekst="Neither-Nije ni Jabuka ni Banana";
	}	
	document.getElementById("demo16").innerHTML = tekst;										
}	

function mojaFunkcija17(){
	var i;
		for (i = 0; i < 10; i++) { 
			console.log(i);
		}
	document.getElementById("demo17").innerHTML = i;
}	

function mojaFunkcija18(){
	var voce =['Apple','Banana','Orange', 'Kruska','Mango', 'Kivi'];
		for (x in voce) { 
			console.log(x);
	}
	document.getElementById("demo18").innerHTML = x;
}
function mojaFunkcija19(){
	var i=0;
		while(i<10) {
			console.log(i);
			i++
		}
							
		document.getElementById("demo19").innerHTML = i;
}

function mojaFunkcija20(){
	var i=0;
		while(i<10) {
			console.log(i);
			i=i+2;
		}
						
	document.getElementById("demo20").innerHTML = i;
}
function mojaFunkcija21(){
	for (i = 0; i < 10; i++) {
		console.log(i); 
			if (i == 5) { 
				break;	
			}
	}
	document.getElementById("demo21").innerHTML = i;
}

function mojaFunkcija22(){
	for (i = 0; i < 10; i++) {
		if (i == 5) { 
			continue;	
		}
	console.log(i);
	}
	document.getElementById("demo22").innerHTML = i;
}
function mojaFunkcija23(){
	document.getElementById("demo23").innerHTML = "Hello";
}

function mojaFunkcija24(){
	document.getElementsByTagName("p")[0].innerHTML = "Hello";

}


function mojaFunkcija25(){
	document.getElementsByClassName("test")[0].innerHTML="Hello";

}

function mojaFunkcija26(){
	document.getElementById('image').src='img/pic_bulbon.gif';
}

function mojaFunkcija27(){
	document.getElementById('myText').value='Hello World!';
}


function mojaFunkcija27a(){
	window.print()
}


function mojaFunkcija28(){
	var rnd=Math.random();alert(rnd);
}


function mojaFunkcija29(){
	var x = Math.max(10, 20);
	document.getElementById("demo29").innerHTML =x;
}



function mojaFunkcija30(){
	var x = Math.round(5.3);
	document.getElementById("demo30").innerHTML =x;
}

function mojaFunkcija31(){
	var x = Math.sqrt(9);
	document.getElementById("demo31").innerHTML =x;
}

function mojaFunkcija32(){
	var x=10,y=5;
alert(x>y)
												
}

function mojaFunkcija33(){
	var x=10,y=10;
alert(x==y)
												
}

function mojaFunkcija34(){
	var x=10,y=5;
alert(x!=y)
												
}

function mojaFunkcija35(){
	var age=5;
	var can_vote=(age<18)?"maloletnik":"punoletan";
	alert(can_vote);
												
}


function mojaFunkcija36() {
  const today = new Date();
  const day = today.getDay();
  const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  console.log(`Today is: ${daylist[day]}.`);
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let prepand = (hour >= 12) ? "PM" : "AM";
  hour = (hour >= 12) ? hour - 12 : hour;
  if (hour === 0 && prepand === "PM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = "Noon";
    }
    else {
      hour = 12;
      prepand = "PM";
    }
  }
  if (hour === 0 && prepand === "AM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = "Midnight";
    }
    else {
      hour = 12;
      prepand = "AM"
    }
  }
  console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);
 
}



























































										