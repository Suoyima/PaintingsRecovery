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

window.onload = function openDoor() {
    var doorLeft = document.getElementById("doorLeft");
    var doorRight = document.getElementById("doorRight");
    var buttonStart = document.querySelector('.buttonStart');

    doorLeft.style.transform = "rotateY(80deg)";
    doorRight.style.transform = "rotateY(-80deg)";
	
    setTimeout(function() {
        buttonStart.style.zIndex = 3;
    }, 2000);
}

function AnimaAndRedirect() {
    var button = document.querySelector('.buttonStart');
        
    button.src = "images/index/buttonStartAnima.png";
	
    setTimeout(function() {
        window.location.href = 'mainPage.html';
    }, 1000);
}