//check off specific todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function(e){
	if (e.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
	//create new li and add to ul
	$("ul").append("<li><span>x</span> " + todoText + "</li>");
	}
});