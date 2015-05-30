$(document).ready(function(){

	$('.tweet-compose').on('click', function(){
		//var height = Number($(this).css('height').split('p')[0]);
		// console.log(height);
		//$(this).css('height', height*2);
		$(this).css('height', 66);
		$('#char-count').css('visibility', 'visible');
		$('#tweet-submit').css('visibility', 'visible');
		//var maxlength = 140;
		$(this).keyup(function(){
			//var maxlength = 140;
			var length = $(this).val().length;
			length = 140 - length;
			//console.log(length);
			$('#str-length').text(length);
			if(length < 11){
				$('#str-length').css('color', 'red');
			} else {
				$('#str-length').css('color', 'black');
			}
			if(length < 0){
				$('#tweet-submit').prop('disabled', true);
			} else {
				$('#tweet-submit').prop('disabled', false);
			}
		})
	})

	$('#tweet-submit').on('click', function(){
		
	})




















})