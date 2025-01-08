function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

var selected = getQueryParam('selected');
var taskCompleted = getQueryParam('taskCompleted');

// var selected = 'paintingFirst';

var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
var eventType = isTouchDevice ? 'touchend' : 'click';

var pieceSelectedClassName;

function toggleMusic(){
    var audio = document.getElementById("backgroundMusic");
    var button = document.getElementById("buttonMusic");
    
    if (audio.paused) {
        audio.play();
        button.src = "images/task5/buttonMusicOn.png";
    } else {
        audio.pause();
        button.src = "images/task5/buttonMusicDown.png";
    }
}

$(document).ready(function(){
	var paintingNum;
	if(selected=='paintingFirst')	paintingNum = 'first';
	if(selected=='paintingSecond')	paintingNum = 'second';
	if(selected=='paintingThird')	paintingNum = 'third';
	if(selected=='paintingFourth')	paintingNum = 'fourth';
	
	var viewNum;
	if(selected=='paintingFirst')	viewNum = 'First';
	if(selected=='paintingSecond')	viewNum = 'Second';
	if(selected=='paintingThird')	viewNum = 'Third';
	if(selected=='paintingFourth')	viewNum = 'Fourth';
	
	$('<img>', {
		'class': 'painting',
		'src': `images/paintings/${paintingNum}.png`,
		'alt': '古画'
	}).appendTo('.container');
	$('<img>', {
		'class': 'pieceOnPainting',
		'src': `images/task5/pieceOnPainting${viewNum}.png`,
		'alt': '绢'
	}).appendTo('.container');
	
	var profileNum = 0;
	$('.container').on(eventType, '.backgroundPop, .buttonCloseCard', function(event){
		profileNum = 0;
		$('.backgroundPop, .profileBook, .buttonBook, .profileCard, .buttonCloseCard').remove();
	});
	$('.container').on(eventType, '.buttonBook', function(event){
		if(0==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task5/profileBookPalette.png');
			profileNum+=1;
		}
		else if(1==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task5/profileBookPaint.png');
			profileNum+=1;
		}
		else if(2==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task5/profileBookPaintingbrush.png');
			$('.buttonBook').remove();
		}
	});
	$('#buttonPrompt').on(eventType, function(event){
		var newImages = [
			{
				class: 'backgroundPop',
				src: 'images/task5/backgroundPop.png',
				alt: '弹窗背景'
			},
			{
				class: 'profileBook',
				src: 'images/task5/profileBookTask.png',
				alt: '介绍'
			},
			{
				class: 'buttonBook',
				src: 'images/task5/buttonBook.png',
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
	
	$('.toolbarPalette, .toolbarPaint, .toolbarPaintingbrush').on(eventType, function(){
		var name = 'null';
		if($(this).attr('class')=='toolbarPalette')	name = 'Palette';
		if($(this).attr('class')=='toolbarPaint')	name = 'Paint';
		if($(this).attr('class')=='toolbarPaintingbrush')	name = 'Paintingbrush';
		
		var newImages = [
			{
				class: 'backgroundPop',
				src: 'images/task5/backgroundPop.png',
				alt: '弹窗背景'
			},
			{
				class: 'profileCard',
				src: `images/task5/profileCard${name}.png`,
				alt: '介绍'
			},
			{
				class: 'buttonCloseCard',
				src: 'images/task5/buttonCloseCard.png',
				alt: '关闭按钮'
			}
		];
		
		$.each(newImages, function(index, image) {
		    $('<img>', {
				'class': image.class,
		        'src': image.src,
		        'alt': image.alt
		    }).appendTo('.container');
		});
	});
	
	$('#buttonClose').click(function(){
		window.location.href = `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
	});
	
	var elementsArray = [];
	$('.container').on('click', '.toolbarArrowDown', function() {
	    var selectedElements = $(
	        'img[class^=toolbar], img[class^=prompt], ' +
	        '.paletteShined, .paintShined, .paintingbrushShined, .question'
	    );
		
	    elementsArray = [];
	    selectedElements.each(function(){
	        elementsArray.push($(this).clone(true));
	        $(this).remove();
	    });
	
	    var imgToolbarDown = $('<img/>', {
	        'class': 'toolbarDown',
	        src: 'images/task5/toolbarDown.png'
	    });
	    var imgToolbarArrowUp = $('<img/>', {
	        'class': 'toolbarArrowUp',
	        src: 'images/task1/toolbarArrowUp.png'
	    });
	
	    $('.container').append(imgToolbarDown, imgToolbarArrowUp);
	});
	$('.container').on('click', '.toolbarArrowUp', function() {
	    for (var i = 0; i < elementsArray.length; i++) {
	        $('.container').append(elementsArray[i]);
	    }
	
	    $('.toolbarArrowUp, .toolbarDown').remove();
	
	    elementsArray.length = 0;
	});
	
	$('.container').on(eventType, '.question', function(){
		$('.question, .toolbarPalette, .toolbarPaint, .toolbarPaintingbrush').remove();
		
		var newImages = [
			{
				class: 'paletteShined',
				src: 'images/task5/paletteShined.png',
				alt: '调色板'
			},
			{
				class: 'promptPalette',
				src: 'images/task5/promptPalette.png',
				alt: '提示'
			}
		];
		
		$.each(newImages, function(index, image) {
		    $('<img>', {
				'class': image.class,
		        'src': image.src,
		        'alt': image.alt
		    }).appendTo('.container');
		});
	});
	
	$('.container').on(eventType, '.paletteShined', function(){
		var newImages = [
			{
				class: 'paletteMid',
				src: 'images/task5/paletteMid.png',
				alt: '调色板'
			},
			{
				class: 'paintWorking',
				src: 'images/task5/paintWorking.png',
				alt: '颜料'
			}
		];
		
		$.each(newImages, function(index, image) {
		    $('<img>', {
				'class': image.class,
		        'src': image.src,
		        'alt': image.alt
		    }).appendTo('.container');
		});
	})
	$('.container').on(eventType, '.paintWorking', function(){
		$('.paintWorking, .promptPalette').remove();
		
		var newImages = [
			{
				class: 'paintOnPaletteFirst',
				src: 'images/task5/paintOnPaletteFirst.png',
				alt: '颜料'
			},
			{
				class: 'hand',
				src: 'images/task5/hand.png',
				alt: '手势提示'
			},
			{
				class: 'promptPaint',
				src: 'images/task5/promptPaint.png',
				alt: '提示'
			}
		];
		
		$.each(newImages, function(index, image) {
		    $('<img>', {
				'class': image.class,
		        'src': image.src,
		        'alt': image.alt
		    }).appendTo('.container');
		});
	});
	
	let isDragging = false;
	let dragTimer;
	let currentDragElement;
	function startDrag(event, element) {
	    event.preventDefault();
	    isDragging = true;
	    currentDragElement = element;
	
	    dragTimer = setTimeout(() => {
	        if (isDragging && currentDragElement) {
	            const newClass = getNextClass(currentDragElement.attr('class'));
	            if (newClass === 'paintOnPaletteThird') {
	                $('.paletteShined, .promptPaint').remove();
	
	                var newImages = [
	                    {
	                        class: 'paintingbrushShined',
	                        src: 'images/task5/paintingbrushShined.png',
	                        alt: '画笔'
	                    },
	                    {
	                        class: 'promptPaintingbrush',
	                        src: 'images/task5/promptPaintingbrush.png',
	                        alt: '提示'
	                    },
	                    {
	                        class: 'paintingbrushWorking',
	                        src: 'images/task5/paintingbrushWorking.png',
	                        alt: '工作中的画笔'
	                    }
	                ];
	
	                $.each(newImages, function(index, image) {
	                    $('<img>', {
	                        'class': image.class,
	                        'src': image.src,
	                        'alt': image.alt
	                    }).appendTo('.container');
	                });
	            }
	
	            currentDragElement.remove();
	
	            $('<img>', {
	                'class': newClass,
	                'src': getNewSrc(newClass),
	                'alt': getAltText(newClass)
	            }).appendTo('.container').trigger(event.type);
	
	            currentDragElement = $('.container .' + newClass);
	        }
	    }, 1000);
	}
	function getNextClass(currentClass) {
	    if (currentClass.includes('paintOnPaletteFirst')) return 'paintOnPaletteSecond';
	    if (currentClass.includes('paintOnPaletteSecond')) return 'paintOnPaletteThird';
	    return null;
	}
	function getNewSrc(newClass) {
	    switch (newClass) {
	        case 'paintOnPaletteSecond':
	            return 'images/task5/paintOnPaletteSecond.png';
	        case 'paintOnPaletteThird':
	            return 'images/task5/paintOnPaletteThird.png';
	        default:
	            return '';
	    }
	}
	function getAltText(newClass) {
	    switch (newClass) {
	        case 'paintOnPaletteSecond':
	            return '搅拌中的颜料';
	        case 'paintOnPaletteThird':
	            return '搅拌完的颜料';
	        default:
	            return '';
	    }
	}
	function stopDrag() {
	    clearTimeout(dragTimer);
	    isDragging = false;
	    currentDragElement = null;
	}
	$('.container').on('mousedown touchstart', '.paintOnPaletteFirst, .paintOnPaletteSecond', function(event){
		$('.hand').remove();
	    startDrag(event, $(this));
	});
	$(document).on('mouseup touchend', stopDrag);
	$(document).on('mousemove touchmove', function(event){
	    if (isDragging && currentDragElement) {
	        event.preventDefault();
	    }
	});
	
	$('.container').on(eventType, '.paintingbrushWorking', function(){
	    $('.paletteMid, .paintOnPaletteThird, .paintingbrushWorking').remove();
	
	    var $paintingbrushFinal = $('<img>', {
	        'class': 'paintingbrushFinal',
	        'src': `images/task5/paintingbrushWorking.png`,
	        'alt': '画笔'
	    }).appendTo('.container');
	
	    $paintingbrushFinal.one('animationend', function() {
	        $('.paintingbrushFinal, .pieceOnPainting').remove();
			
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
			    'width': '83%'
			}, {
			    duration: 1500,
				complete: function(){
					taskCompleted = "Fifth";
					window.location.href = `call_back.html`;
				}
			});
	    });
	});
	
});