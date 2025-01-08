function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// var selected = getQueryParam('selected');
var taskCompleted = getQueryParam('taskCompleted');

var selected = 'paintingFirst';

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
	
	
	
});