$(document).ready(function(){
	$(".direction").selectize();
	$(".button_burger").on("click", function(){
        $(".button_burger").toggleClass("button_burger-open");
        $(".burger").slideToggle();
    
	   })
	})
