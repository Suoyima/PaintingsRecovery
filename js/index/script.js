$(document).ready(function(){
	var animateTime = 5000;

    $('#barRight').animate({
        right: '0%'
    }, {
		duration: animateTime,
		step:function(current, fx){
			updateNum(fx.start, fx.end, current, animateTime);
		},
		complete: AnimateComplete
	});
	
    $('#barMid').animate({
        left: '0%'
    }, {
		duration: animateTime,
		step:function(current, fx){
			updateNum(fx.start, fx.end, current, animateTime);
		},
		complete: AnimateComplete
	});
});

function AnimateComplete(){
	window.location.href = 'start.html';
}

function updateNum(start, end, current, duration) {
    var Num = ((current - start) / (end - start)) * 100;
	
    $('#barNum').text(Math.round(Num) + '%');
}