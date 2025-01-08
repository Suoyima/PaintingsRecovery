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
        button.src = "images/task3/buttonMusicOn.png";
    } else {
        audio.pause();
        button.src = "images/task3/buttonMusicDown.png";
    }
}

$(document).ready(function(){
	var paintingNum;
	if(selected=='paintingFirst' || selected == null)	paintingNum = 'first';
	if(selected=='paintingSecond')	paintingNum = 'second';
	if(selected=='paintingThird')	paintingNum = 'third';
	if(selected=='paintingFourth')	paintingNum = 'fourth';
	
	var viewNum;
	if(selected=='paintingFirst' || selected == null)	viewNum = 'First';
	if(selected=='paintingSecond')	viewNum = 'Second';
	if(selected=='paintingThird')	viewNum = 'Third';
	if(selected=='paintingFourth')	viewNum = 'Fourth';
	
	var startY, currentY, deltaY;
    var isDragging = false;
    var cumulativeOffset = 0;
    $('.lensMid').css('transform', 'translate(-50%, -50%)');
	function updateLensPosition() {
		requestAnimationFrame(function() {
			if (cumulativeOffset > 25) {
				cumulativeOffset = 25;
			} 
			else if (cumulativeOffset < 0) {
				cumulativeOffset = 0;
			}

			var integerOffset = Math.round(cumulativeOffset);
			$('.lensMid').css('transform', 'translate(-50%, ' + (-50 + integerOffset) + '%)');
		});
	}
    $('.container').on('touchstart mousedown', '.wheelCMid', function(e){
        isDragging = true;
		$('#soundWheel')[0].play();
        startY = (e.type === 'touchstart') ? e.originalEvent.touches[0].clientY : e.clientY;
        e.preventDefault();
    });
    $(document).on('touchmove mousemove', function(e){
        if (!isDragging) return;
		$('.handMid').remove();

        currentY = (e.type === 'touchmove') ? e.originalEvent.touches[0].clientY : e.clientY;
        deltaY = currentY - startY;

        cumulativeOffset += deltaY;
        
        startY = currentY;

        updateLensPosition();

        e.preventDefault();
    });
	var buttonViewOpenMidExisted = false;
    $(document).on('touchend mouseup', function(e){
        isDragging = false;
		
		$('#soundWheel')[0].pause();
    
        if (cumulativeOffset == 25 && false == buttonViewOpenMidExisted) {
            var backgroundPopImg = $('<img>', {
                src: 'images/task3/backgroundPop.png',
                alt: '弹窗背景',
                class: 'backgroundPop'
            }).appendTo('.container');
    
            var warningLensOImg = $('<img>', {
                src: 'images/task3/warningLensO.png',
                alt: '警告',
                class: 'warningLensO'
            }).appendTo('.container');
    
            setTimeout(function() {
                backgroundPopImg.remove();
                warningLensOImg.remove();
    
                var newImg = $('<img>', {
                    src: 'images/task3/buttonViewOpen.png',
                    alt: '视野开关',
                    class: 'buttonViewOpenMid'
                });
                $('.container').append(newImg);
    
                $('.prompt').attr('src', 'images/task3/promptSecond.png');
                $('.prompt').css('width', '61.7%');
    
                buttonViewOpenMidExisted = true;
            }, 3000);
        }
    });
	
	var profileNum = 0;
	$('.container').on(eventType, '.backgroundPop, .buttonCloseCard', function(event){
		profileNum = 0;
		$('.backgroundPop, .profileBook, .buttonBook, .profileCard, .buttonCloseCard').remove();
	});
	$('.container').on(eventType, '.buttonBook', function(event){
		if(0==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task3/profileBookMicroscope.png');
			profileNum+=1;
		}
		else if(1==profileNum){
			// alert(profileNum);
			$('.profileBook').attr('src', 'images/task3/profileBookPiece.png');
			$('.buttonBook').remove();
		}
	});
	$('#buttonPrompt').on(eventType, function(event){
		var newImages = [
			{
				class: 'backgroundPop',
				src: 'images/task3/backgroundPop.png',
				alt: '弹窗背景'
			},
			{
				class: 'profileBook',
				src: 'images/task3/profileBookTask.png',
				alt: '介绍'
			},
			{
				class: 'buttonBook',
				src: 'images/task3/buttonBook.png',
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
	
	$('#buttonClose').click(function(){
		window.location.href = `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
	});
	
	$('.container').on(eventType, '.buttonViewOpenMid', function(event){
	    $('.lensMid, .microscopeMid, .wheelCMid, .wheelFMid, .buttonViewOpenMid').remove();
		
	    var newImages = [
	        { class: 'lensRight', src: 'images/task3/lens.png', alt: '物镜' },
	        { class: 'microscopeRight', src: 'images/task3/microscope.png', alt: '显微镜' },
	        { class: 'wheelCRight', src: 'images/task3/wheelC.png', alt: '粗准焦螺旋' },
	        { class: 'wheelFRight', src: 'images/task3/wheelF.png', alt: '细准焦螺旋' },
	        { class: 'handRight', src: 'images/task3/hand.png', alt: '手' },
			{ class: 'view', src: `images/task3/view${viewNum}.png`, alt: '视野' }
	    ];
	
	    $.each(newImages, function(index, image){
	        $('<img>', {
	            'class': image.class,
	            'src': image.src,
	            'alt': image.alt
	        }).appendTo('.container');
		});
		
		$('.prompt').attr('src', 'images/task3/promptThird.png');
		$('.prompt').css('width', '41.6%');
	});
	
	var blurValue = 5;
	var startY, currentY, deltaY;
	var isDraggingWheelF = false;
	$('.container').on('touchstart mousedown', '.wheelFRight', function(e) {
	    isDraggingWheelF = true;
		$('#soundWheel')[0].play();
	    startY = (e.type === 'touchstart') ? e.originalEvent.touches[0].clientY : e.clientY;
	    e.preventDefault();
	});
	$(document).on('touchmove mousemove', function(e) {
	    if (!isDraggingWheelF) return;
		$('.handRight').remove();
	        
	    currentY = (e.type === 'touchmove') ? e.originalEvent.touches[0].clientY : e.clientY;
	    deltaY = currentY - startY;
	
	    if (deltaY < 0) {
	        blurValue += Math.abs(deltaY) * 0.1;
	        if (blurValue > 10) blurValue = 10;
	    } 
		else if (deltaY > 0) {
	        blurValue -= Math.abs(deltaY) * 0.1;
	        if (blurValue < 0) blurValue = 0;
	    }
	
	    $('.view').css('filter', `blur(${blurValue}px)`);
	
	    startY = currentY;
	    e.preventDefault();
	});
	var buttonViewOpenRightExisted = false;
	$(document).on('touchend mouseup', function(e) {
		isDraggingWheelF = false;
		
		$('#soundWheel')[0].pause();
		        
		if (blurValue == 0 && false == buttonViewOpenRightExisted) {
		    var newImg = $('<img>', {
		        src: 'images/task3/buttonViewOpen.png',
		        alt: '视野开关',
		        class: 'buttonViewOpenRight'
		    });
		    $('.container').append(newImg);
			buttonViewOpenRightExisted = true;
		}
	});
	
	$('.container').on(eventType, '.buttonViewOpenRight', function(event){
	    $(this).remove();
	    $('.prompt').remove();
	    
	    var newImages = [
	        { class: 'pieceSelectPrompt', src: 'images/task3/pieceSelectPrompt.png', alt: '选择提示' },
	        { class: 'pieceShowingbar', src: 'images/task3/pieceShowingbar.png', alt: '信息栏' },
	        { class: 'pieceFirst', src: 'images/task3/pieceFirst.png', alt: '绢一' },
	        { class: 'pieceSecond', src: 'images/task3/pieceSecond.png', alt: '绢二' },
	        { class: 'pieceThird', src: 'images/task3/pieceThird.png', alt: '绢三' },
	        { class: 'pieceFourth', src: 'images/task3/pieceFourth.png', alt: '绢四' }
	    ];
	
	    $.each(newImages, function(index, image){
	        $('<img>', {
	            'class': image.class,
	            'src': image.src,
	            'alt': image.alt
	        }).appendTo('.container');
	    });
	});
	
	var defaultSrc = {
	    pieceFirst: 'images/task3/pieceFirst.png',
	    pieceSecond: 'images/task3/pieceSecond.png',
	    pieceThird: 'images/task3/pieceThird.png',
	    pieceFourth: 'images/task3/pieceFourth.png'
	};
	var clickedSrc = {
	    pieceFirst: 'images/task3/pieceFirstSelecting.png',
	    pieceSecond: 'images/task3/pieceSecondSelecting.png',
	    pieceThird: 'images/task3/pieceThirdSelecting.png',
	    pieceFourth: 'images/task3/pieceFourthSelecting.png'
	};
	$('.container').on(eventType, '.pieceFirst, .pieceSecond, .pieceThird, .pieceFourth', function(event){
	    pieceSelectedClassName = $(this).attr('class');
	    
	    $.each(defaultSrc, function(key, src){
	        $('.' + key).attr('src', src);
	    });
	
	    $(this).attr('src', clickedSrc[pieceSelectedClassName]);
		
		$('.pieceShowing, .buttonSelect').remove();
	    var newImages = [
	        { class: 'pieceShowing', src: `images/task3/${pieceSelectedClassName}Showing.png`, alt: '绢简介' },
	        { class: 'buttonSelect', src: 'images/task3/buttonSelect.png', alt: '选择按钮' }
	    ];
	
	    $.each(newImages, function(index, image){
	        $('<img>', {
	            'class': image.class,
	            'src': image.src,
	            'alt': image.alt
	        }).appendTo('.container');
	    });
	});
	
	$('.container').on(eventType, '.buttonSelect', function(event){
	    if (pieceSelectedClassName != `piece${viewNum}`) {
	        var newImages = [
	            { class: 'backgroundPop', src: 'images/task3/backgroundPop.png', alt: '弹窗背景' },
	            { class: 'warningPieceSelect', src: 'images/task3/warningPieceSelect.png', alt: '警告' }
	        ];
	
	        $.each(newImages, function(index, image){
	            $('<img>', {
	                'class': image.class,
	                'src': image.src,
	                'alt': image.alt
	            }).appendTo('.container');
	        });
	
	        setTimeout(function() {
	            $('.backgroundPop, .warningPieceSelect').remove();
	        }, 3000);
	    }
		else{
			var newImages = [
			    {class: 'backgroundProgressbar', src: 'images/progressbar/background.png', alt: '背景图'},
			    {class: 'progressbar', src: 'images/progressbar/bar.png', alt: '进度条底'},
			    {class: 'progressbarPrompt', src: 'images/progressbar/prompt.png', alt: '提示'},
				{class: 'painting', src: `images/paintings/${paintingNum}.png`, alt: '画'},
				{class: 'pieceOnPainting', src: `images/task3/pieceOnPainting${viewNum}.png`, alt: '画上的绢'}
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
			    'width': '46%'
			}, {
			    duration: 1500,
				complete: function(){
					taskCompleted = "Third";
					window.location.href = `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
				}
			});
		}
	});
	
	$('.container').on(eventType, '.microscopeRight, .microscopeMid', function(){
		var newImages = [
			{
				class: 'backgroundPop',
				src: 'images/task3/backgroundPop.png',
				alt: '弹窗背景'
			},
			{
				class: 'profileCard',
				src: 'images/task3/profileCardMicroscope.png',
				alt: '介绍'
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
	
	$('.container').on(eventType, '.pieceShowing', function(){
		var newImages = [
			{
				class: 'backgroundPop',
				src: 'images/task3/backgroundPop.png',
				alt: '弹窗背景'
			},
			{
				class: 'profileCard',
				src: 'images/task3/profileCardPiece.png',
				alt: '介绍'
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
	
});