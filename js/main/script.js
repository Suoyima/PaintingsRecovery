function toggleMusic(){
    var audio = document.getElementById("backgroundMusic");
    var button = document.getElementById("buttonMusic");
    
    if (audio.paused) {
        audio.play();
        button.src = "images/main/buttonMusicOn.png";
    } else {
        audio.pause();
        button.src = "images/main/buttonMusicDown.png";
    }
}

function navigateTo(pageUrl) {
    window.location.href = pageUrl;
}