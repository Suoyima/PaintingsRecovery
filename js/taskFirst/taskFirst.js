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
	if(selected=='paintingFirst' || selected == null)	paintingNum = 'first';
	if(selected=='paintingSecond')	paintingNum = 'second';
	if(selected=='paintingThird')	paintingNum = 'third';
	if(selected=='paintingFourth')	paintingNum = 'fourth';
	
	$('<img>', {
		'class': 'painting',
		'src': `images/paintings/${paintingNum}.png`,
		'alt': '古画'
	}).appendTo('.container');
	
	var profileNum = 0;
	$('.container').on(eventType, '.backgroundPop', function(event){
		profileNum = 0;
		$('.backgroundPop, .profileBook, .buttonBook, .profileCard').remove();
	});
	$('.container').on(eventType, '.buttonBook', function(event){
		if(0==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task1/profileBookKettle.png');
			profileNum+=1;
		}
		else if(1==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task1/profileBookBrush.png');
			profileNum+=1;
		}
		else if(2==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task1/profileBookTowel.png');
			$('.buttonBook').remove();
		}
	});
	$('#buttonPrompt').on(eventType, function(event){
		var newImages = [
			{
				class: 'backgroundPop',
				src: 'images/task1/backgroundPop.png',
				alt: '弹窗背景'
			},
			{
				class: 'profileBook',
				src: 'images/task1/profileBookTask.png',
				alt: '介绍'
			},
			{
				class: 'buttonBook',
				src: 'images/task1/buttonBook.png',
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
	
	$('.toolbarKettle, .toolbarBrush, .toolbarTowel').on(eventType, function(){
		var name = 'null';
		if($(this).attr('class')=='toolbarKettle')	name = 'Kettle';
		if($(this).attr('class')=='toolbarBrush')	name = 'Brush';
		if($(this).attr('class')=='toolbarTowel')	name = 'Towel';
		
		var newImages = [
			{
				class: 'backgroundPop',
				src: 'images/task1/backgroundPop.png',
				alt: '弹窗背景'
			},
			{
				class: 'profileCard',
				src: `images/task1/profileCard${name}.png`,
				alt: '介绍'
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
	
	$('.container').on(eventType, '.question', function(){
		$('.question, .toolbarKettle, .toolbarBrush, .toolbarTowel').remove();
		
		var newImages = [
			{
				class: 'kettleShined',
				src: 'images/task1/kettleShined.png',
				alt: '水壶'
			},
			{
				class: 'promptKettle',
				src: 'images/task1/promptKettle.png',
				alt: '提示'
			}
		];
		
		$.each(newImages, function(index, image) {
		    $('<img>', {
				'class': image.class,
		        'src': image.src,
		        'alt': image.alt
		    }).appendTo('.toolbar');
		});
	});
	
	$('.container').on(eventType, '.kettleShined', function(){
	    var $movingImg = $('<img>', {
	        'src': 'images/task1/kettleWatering.png',
	        'alt': '浇水的水壶',
	        'class': 'kettleWatering'
	    });
		
	    $movingImg.appendTo('.container');
	    
	    var onAnimationEnd = function() {
			$movingImg.remove();
	        $('.kettleShined, .promptKettle').remove();
	    
	        $('<img>', {
	            'class': 'waterFirst',
	            'src': 'images/task1/waterFirst.png',
	            'alt': '水'
	        }).appendTo('.container');
	    
	        var additionalImages = [
	            {
	                class: 'brushShined',
	                src: 'images/task1/brushShined.png',
	                alt: '排刷'
	            },
	            {
	                class: 'promptBrush',
	                src: 'images/task1/promptBrush.png',
	                alt: '提示'
	            }
	        ];
	    
	        $.each(additionalImages, function(index, image) {
	            $('<img>', {
	                'class': image.class,
	                'src': image.src,
	                'alt': image.alt
	            }).appendTo('.toolbar');
	        });
	    };
    
        var animationProperties = {
            'bottom': '60%',
            'left': '60%'
        };
        var duration = 1500;
    
        
        $movingImg.animate(animationProperties, duration, onAnimationEnd);
	});
	
	$('.container').on(eventType, '.brushShined', function(){
		var $movingImg = $('<img>', {
			'src': 'images/task1/brushWorking.png',
			'alt': '刷东西的排刷',
			'class': 'brushWorking'
		});
				
		$movingImg.appendTo('.container');
			    
		var onAnimationEnd = function() {
			$movingImg.remove();
		    $('.brushShined, .promptBrush, #dirt').remove();
		
		    var additionalImages = [
		        {
		            class: 'towelShined',
		            src: 'images/task1/towelShined.png',
		            alt: '水盆毛巾'
		        },
		        {
		            class: 'promptTower',
		            src: 'images/task1/promptTowel.png',
		            alt: '提示'
		        }
		    ];
		
		    $.each(additionalImages, function(index, image) {
		        $('<img>', {
		            'class': image.class,
		            'src': image.src,
		            'alt': image.alt
		        }).appendTo('.toolbar');
		    });
		};
		
		var animationProperties = {
		    'top': '60%',
		    'left': '60%'
		};
		var duration = 1500;
		
		$movingImg.animate(animationProperties, duration, onAnimationEnd);
	});
	
	$('.container').on(eventType, '.towelShined', function(){
	    $('.waterFirst').fadeOut(800, function() {
	        $(this).remove();
	    
	        var $waterSecond = $('<img>', {
	            'class': 'waterSecond',
	            'src': 'images/task1/waterSecond.png',
	            'alt': '水'
	        }).hide().appendTo('.container');
	
	        $waterSecond.fadeIn(800).delay(500).fadeOut(800, function() {
	            $(this).remove();
	
	            var $waterThird = $('<img>', {
	                'class': 'waterThird',
	                'src': 'images/task1/waterThird.png',
	                'alt': '水'
	            }).hide().appendTo('.container');
	
	            $waterThird.fadeIn(800).delay(500).fadeOut(800, function() {
	                $(this).remove();
					
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
					    'width': '10%'
					}, {
					    duration: 1500,
						complete: function(){
							taskCompleted = "First";
							window.location.href = `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
						}
					});
	            });
	        });
	    });
	});
	
	$('#buttonClose').click(function(){
		window.location.href = `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
	});
	
	var elementsArray = [];
	$('.container').on('click', '.toolbarArrowDown', function() {
	    var selectedElements = $(
	        'img[class^=toolbar], img[class^=prompt], ' +
	        '.brushShined, .kettleShined, .towelShined, .question'
	    );
		
	    elementsArray = [];
	    selectedElements.each(function(){
	        elementsArray.push($(this).clone(true));
	        $(this).remove();
	    });
	
	    var imgToolbarDown = $('<img/>', {
	        'class': 'toolbarDown',
	        src: 'images/task1/toolbarDown.png'
	    });
	    var imgToolbarArrowUp = $('<img/>', {
	        'class': 'toolbarArrowUp',
	        src: 'images/task1/toolbarArrowUp.png'
	    });
	
	    $('.toolbar').append(imgToolbarDown, imgToolbarArrowUp);
	});
	$('.container').on('click', '.toolbarArrowUp', function() {
	    for (var i = 0; i < elementsArray.length; i++) {
	        $('.toolbar').append(elementsArray[i]);
	    }
	
	    $('.toolbarArrowUp, .toolbarDown').remove();
	
	    elementsArray.length = 0;
	});
	
});