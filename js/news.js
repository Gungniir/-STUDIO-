
$(document).ready(function() {

	if(window.innerHeight < window.innerWidth){ 
		$("#article-november").on("mouseover", function() {
			$("#pointer-november").css("border", "3px solid #FBFBFB");
			$("#pointer-november").css("border-radius", "3px");
			$("#pointer-november-text").css("font-weight", "600");
		});

		$("#article-november").on("mouseout", function() {
			$("#pointer-november").css("border", "1px solid #FBFBFB");
			$("#pointer-november").css("border-radius", "1px");
			$("#pointer-november-text").css("font-weight", "400");
		});

		$("#article-september").on("mouseover", function() {
			$("#pointer-september").css("border", "3px solid #FBFBFB");
			$("#pointer-september").css("border-radius", "3px");
			$("#pointer-september-text").css("font-weight", "600");
		});

		$("#article-september").on("mouseout", function() {
			$("#pointer-september").css("border", "1px solid #FBFBFB");
			$("#pointer-september").css("border-radius", "1px");
			$("#pointer-september-text").css("font-weight", "400");
		});

		$("#article-july").on("mouseover", function() {
			$("#pointer-july").css("border", "3px solid #FBFBFB");
			$("#pointer-july").css("border-radius", "3px");
			$("#pointer-july-text").css("font-weight", "600");
		});

		$("#article-july").on("mouseout", function() {
			$("#pointer-july").css("border", "1px solid #FBFBFB");
			$("#pointer-july").css("border-radius", "1px");
			$("#pointer-july-text").css("font-weight", "400");
		});
	}
});