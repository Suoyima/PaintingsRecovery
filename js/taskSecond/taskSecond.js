function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

var selected = getQueryParam('selected');
var taskCompleted = getQueryParam('taskCompleted');

// var selected = 'paintingFirst';

var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
var eventType = isTouchDevice ? 'touchend' : 'click';

function toggleMusic(){
    var audio = document.getElementById("backgroundMusic");
    var button = document.getElementById("buttonMusic");
    
    if (audio.paused) {
        audio.play();
        button.src = "images/task1/buttonMusicOn.png";
    } else {
        audio.pause();
        button.src = "images/task1/buttonMusicDown.png";
    }
}


$(document).ready(function(){
	var paintingNum;
	if(selected=='paintingFirst')	paintingNum = 'first';
	if(selected=='paintingSecond')	paintingNum = 'second';
	if(selected=='paintingThird')	paintingNum = 'third';
	if(selected=='paintingFourth')	paintingNum = 'fourth';
	
	$('<img>', {
		'class': 'painting',
		'src': `images/paintings/${paintingNum}.png`,
		'alt': '古画'
	}).appendTo('.containerBigger');
	
	var $container = $('.container');
	var $containerBigger = $('.containerBigger');
	var isDragging = false, isBubbleGenerated = false;
	var startX, startY, elmX = 0, elmY = 0;
	// var $followImg;
	$containerBigger.on('touchstart', function(e) {
	    e.preventDefault();
	    isDragging = true;
	    startX = e.originalEvent.touches[0].clientX - elmX;
	    startY = e.originalEvent.touches[0].clientY - elmY;
	
	    // $followImg = $('<img src="images/task2/hand.png" alt="手">')
	    //     .css({
	    //         position: 'absolute',
	    //         pointerEvents: 'none',
	    //         zIndex: 5
	    //     });
	    // $('body').append($followImg);
		
		if(!isBubbleGenerated){
			var imgClass = 'bubble';
			var imgSrc = 'images/task2/bubble.png';
			var imgAlt = '气泡框';
			var $newImg = $(`<img class="${imgClass}" src="${imgSrc}" alt="${imgAlt}">`)
			$containerBigger.append($newImg);
			$('.prompt').attr('src', 'images/task2/promptSecond.png');
			isBubbleGenerated = true;
		}
	
	    var touch = e.originalEvent.touches[0];
	    setPosition(touch.clientX, touch.clientY);
	});
	$containerBigger.on('touchmove', function(e) {
	    if (isDragging) {
			$('.hand').remove();
			
	        e.preventDefault();
	        elmX = e.originalEvent.touches[0].clientX - startX;
	        elmY = e.originalEvent.touches[0].clientY - startY;
	
	        elmX = Math.max(Math.min(0, elmX), $container.width() - $containerBigger.width());
	        elmY = Math.max(Math.min(0, elmY), $container.height() - $containerBigger.height());
	
	        $containerBigger.css({
	            transform: `translate(${elmX}px, ${elmY}px)`
	        });
	
	        var touch = e.originalEvent.touches[0];
	        setPosition(touch.clientX, touch.clientY);
	    }
	});
	$containerBigger.on('touchend', function() {
	    isDragging = false;
	
	    // if ($followImg) {
	    //     $followImg.remove();
	    //     $followImg = null;
	    // }
	});
	function setPosition(x, y) {
	    // if ($followImg) {
	    //     $followImg.css({
	    //         left: x,
	    //         top: y
	    //     });
	    // }
	}
	
	var profileNum = 0;
	$('.container').on(eventType, '.backgroundPop, .buttonCloseCard', function(event){
		profileNum = 0;
		$('.backgroundPop, .profileBook, .buttonBook, .profileCard, .buttonCloseCard').remove();
	});
	$('.container').on(eventType, '.buttonBook', function(event){
		if(0==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task2/profileBookTweezer.png');
			profileNum+=1;
		}
		else if(1==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task2/profileBookScrewdriver.png');
			$('.buttonBook').remove();
		}
	});
	$('#buttonPrompt').on(eventType, function(event){
		var newImages = [
			{
				class: 'backgroundPop',
				src: 'images/task2/backgroundPop.png',
				alt: '弹窗背景'
			},
			{
				class: 'profileBook',
				src: 'images/task2/profileBookTask.png',
				alt: '介绍'
			},
			{
				class: 'buttonBook',
				src: 'images/task2/buttonBook.png',
				alt: '切换按钮'
			}
		];
		
		$.each(newImages, function(index, image){
			$('<img>', {
				'class': image.class,
			    'src': image.src,
			    'alt': image.alt
			}).appendTo('.container');
		});
	});
	
	$('.containerBigger').on(eventType, '.bubble', function(){
		var additionalImages = [
		    {
		        class: 'breakageRemove',
		        src: 'images/task2/breakageRemove.gif',
		        alt: '破损去除'
		    }
		];
				
		$.each(additionalImages, function(index, image) {
		    $('<img>', {
		        'class': image.class,
		        'src': image.src,
		        'alt': image.alt
		    }).appendTo('.containerBigger');
		});
		
		$('.breakage, .highlight, .bubble, .prompt').remove();
		
		var newImages = [
		    {class: 'backgroundProgressbar', src: 'images/progressbar/background.png', alt: '背景图'},
		    {class: 'progressbar', src: 'images/progressbar/bar.png', alt: '进度条底'},
		    {class: 'progressbarPrompt', src: 'images/progressbar/prompt.png', alt: '提示'}
		];
						
		$.each(newImages, function(index, image) {
		    $('<img>', {
		        'class': image.class,
		        'src': image.src,
		        'alt': image.alt
		    }).appendTo('.container');
		});
						
		var $div = $('<div>', {
		    'class': 'viewBox'
		}).appendTo('.container');
						
		$('<img>', {
		    'class': 'progressbarLight',
			'css': {
				'width': $('.container').width()*0.83
			},
		    'src': 'images/progressbar/barLight.png',
		    'alt': '进度条'
		}).appendTo($div);
		
		$div.animate({
		    'width': '29%'
		}, {
		    duration: 1500,
			complete: function(){
				taskCompleted = "Second";
				window.location.href = `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
			}
		});
	});
	
	$('#buttonClose').click(function(){
		window.location.href = `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
	});
	
});