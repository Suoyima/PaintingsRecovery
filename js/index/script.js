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

function isWeChatBrowser() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') != -1) {
        return true;
    }
    return false;
}

window.onload = function() {
    if (isWeChatBrowser()) {
        alert('请复制此页面链接并在浏览器中打开以获得最佳体验。');
		document.documentElement.style.display = 'none';
    }
}