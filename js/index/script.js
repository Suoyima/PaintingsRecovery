function toggleMusic(){
    var audio = document.getElementById("backgroundMusic");
    var button = document.getElementById("buttonMusic");
    
    if (audio.paused) {
        audio.play();
        button.src = "images/index/buttonMusicOn.png";
    } else {
        audio.pause();
        button.src = "images/index/buttonMusicDown.png";
    }
}

function navigateTo(pageUrl) {
    window.location.href = pageUrl;
}

window.onload=function(){
	document.getElementById("doorLeft").style.transform = "rotatey(80deg)";
	document.getElementById("doorRight").style.transform = "rotatey(-80deg)";
}

function AnimaAndRedirect() {
    var button = document.querySelector('.buttonStart');
    button.src = "images/index/buttonStartAnima.png";
	
    setTimeout(function() {
        window.location.href = 'mainPage.html';
    }, 1000);
}