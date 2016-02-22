var curPosition = 50;

$(document).ready(function(){
	$(".left-arrow").on("click",function(){
		if(curPosition == 0){
			curPosition = 100;
		}
		else{
			curPosition -= 50;
		}
		$("header").css({"backgroundPosition":curPosition+"%"});
	});
	$(".right-arrow").on("click",function(){
		if(curPosition == 100){
			curPosition = 0;
		}
		else{
			curPosition += 50;
		}
		$("header").css({"backgroundPosition":curPosition+"%"});
	});
});