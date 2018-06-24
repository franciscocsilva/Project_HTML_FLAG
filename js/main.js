$(document).ready(function(){
	$('.moldura1').colorbox({width:768, height:432});
	$('.moldura2').colorbox({width:768, height:432});
	$('.moldura3').colorbox({width:768, height:432});
});


function mostraMenuMobile(){
	var menuBarras = document.getElementById("menu-mobile-content");

	if (menuBarras.style.display=="none" || menuBarras.style.display==""){
		menuBarras.style.display="block";
	} else {
		menuBarras.style.display="none";
	}
}

