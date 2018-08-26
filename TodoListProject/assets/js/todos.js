
var x;
 
function myFunction(event) {
     x = event.which || event.keyCode; 
     if ( x === 13 ) {

	// $("h1").html("The Unicode value is: " + x)
	// console.log($("input").val());
	$("#list").append("<li><span>" +'<i class="fa fa-trash"></i>' +"</span>"+$("input").val() +"</li>")

	$("input").val("") ;

	}

}


// $( "ul" ).on("mouseenter", "li", function() {

// 	 $(this).children().addClass("span");

// });
// $( "ul" ).on("mouseleave", "li", function() {

// 	 $(this).children().removeClass("span");

// });

$("ul").on("click","li",function(){

	$(this).toggleClass("mouse")
})



$("ul").on("click","span",function(){
		
	//$("span").a("display")
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	})

});	

$(".fa-plus").on("click", function(){

	$("input").fadeToggle();
})






