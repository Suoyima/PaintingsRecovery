function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// const selected = getQueryParam('selected');
const taskCompleted = getQueryParam('taskCompleted');

const selected = 'paintingFirst';

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
	}).appendTo('.container');
	
	var profileNum = 0;
	$('.container').on(eventType, '.backgroundPop, .buttonCloseCard', function(event){
		profileNum = 0;
		$('.backgroundPop, .profileBook, .buttonBook, .profileCard, .buttonCloseCard').remove();
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
			},
			{
				class: 'buttonCloseCard',
				src: 'images/task1/buttonCloseCard.png',
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
		    }).appendTo('.container');
		});
	});
	
	$('.container').on(eventType, '.kettleShined', function(){
	    $('<img>', {
	        'class': 'waterFirst',
	        'src': 'images/task1/waterFirst.png',
	        'alt': '水'
	    }).appendTo('.container');
	});
	
});