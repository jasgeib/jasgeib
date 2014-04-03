$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
	.animate(
		{'left': '1200px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '550px');
		}
	);
})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$('body').on('keydown', function(event) {
        if (event.which == 88) {
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-cool').show();
        }
    })
       .on('keyup', function(event) {
        if (event.which == 88) {
            $('.ryu-cool').hide();
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        }
    });
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

$(document).ready(function(){
	$('.street-fighter-logo').delay(800).fadeIn(2000).fadeOut(2000);
	$('.brought').delay(4800).fadeIn(2000).fadeOut(2000);
	$('.jquery-logo').delay(8700).fadeIn(2000).fadeOut(2000);
	$('.instructions').delay(12700).fadeIn(2000);
});
