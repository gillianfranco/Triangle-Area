$(document).ready(function(){
	$('#button').click(function(){
		var base = $('input#base').val();
		var altura = $('input#altura').val();

		var data = new FormData();

		data.set("base", base);
		data.set("altura", altura);

		$.ajax({
			url: 'calculoArea.php',
			type: 'post',
			data: data,
			async: false,
			processData: false,
			contentType: false,
			success: function(data){
				$('.right article.resultado').html(data);
			}
		});
	});
});