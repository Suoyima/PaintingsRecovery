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

document.addEventListener('DOMContentLoaded', function() {
    var buttonStart = document.querySelector('.buttonStart');

    function addClickedClass(event) {
        if (event.target === buttonStart) {
            buttonStart.classList.add('clicked');
        }
    }

    function removeClickedClass(event) {
        if (event.target === buttonStart) {
            buttonStart.classList.remove('clicked');
        }
    }

    ['mousedown', 'touchstart'].forEach(function(eventName) {
        buttonStart.addEventListener(eventName, addClickedClass);
    });

    ['mouseup', 'touchend', 'mouseout', 'touchcancel', 'touchleave'].forEach(function(eventName) {
        buttonStart.addEventListener(eventName, removeClickedClass);
    });

    buttonStart.addEventListener('click', AnimaAndRedirect);
});

function AnimaAndRedirect() {
    var button = document.querySelector('.buttonStart');

    setTimeout(function() {
        navigateTo('mainPage.html');
    }, 1000);
}

window.onload = function openDoor() {
    var doorLeft = document.getElementById("doorLeft");
    var doorRight = document.getElementById("doorRight");
    var buttonStart = document.querySelector('.buttonStart');

    doorLeft.style.transform = "rotateY(85deg)";
    doorRight.style.transform = "rotateY(-85deg)";
	
    setTimeout(function() {
        buttonStart.style.zIndex = 3;
    }, 2000);
}
