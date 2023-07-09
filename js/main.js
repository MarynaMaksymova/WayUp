// var a;
// var b = "Привет!";
// var c=1;


// a=
// prompt ('Введите значение а');
// if (a==9) {alert ("Супер");}
// else {alert ("Что-то другое")};


// for (var i=0; i<5; i++) {
// 	alert (i);
// }


// var user = {
// 	"name" : "Toshka",
// 	"type" : "dog",
// 	"color" : "black",
// 	"age" : 16
// }
// alert (user["name"]+"_"+user.age)


// var mas = ['Toshka', 'dog', 'black', 16];
// alert (mas[1])


// function doMagic (a,b) {
// 	alert (a+b);
// }
// doMagic (3,9);

var btn = document.getElementById("btn");
btn.onclick = function (e) {
	e.preventDefault();
	alert ("Поехали!");
	var text = document.querySelector(".offer p");
	text.classList.add("red");
	var img = document.querySelector(".cases");
	img.style.display = "none";
	document.querySelector(".value-creation").style.marginLeft = "100px";
}


$(function() {
	$(window).scroll(function() {
 		$(".future-section .section-title").each(function() {
 		var itemPos = $(this).offset().top;

 		var topOfWindow = $(window).scrollTop();
 		if (itemPos < topOfWindow+650) {
 			$(this).addClass("animate__fadeInLeft");
 		}
 	})
})
})


$(function() {
	$(window).scroll(function() {
 		$(".advantages .advantage").each(function() {
 		var itemPos = $(this).offset().top;

 		var topOfWindow = $(window).scrollTop();
 		if (itemPos < topOfWindow+650) {
 			$(this).addClass("animate__fadeInUp");
 		}
 	})
})
})