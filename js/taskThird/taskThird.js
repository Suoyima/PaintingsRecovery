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

function navigateToMainPage() {
    window.location.href = "mainPage.html";
}

document.addEventListener('DOMContentLoaded', function () {
    var lensO = document.getElementById('lensO');
    var wheelC = document.getElementById('wheelC');
    var isDragging = false;
    var startY, currentY;

    var moveSound = new Audio('sound/soundWheel.wav');

    function startDrag(e) {
        e.preventDefault();
        isDragging = true;
        startY = getTouchCoord(e);
        moveSound.loop = true;
        moveSound.play();
    }

    function dragMove(e) {
        if (!isDragging) return;
        e.preventDefault();

        currentY = getTouchCoord(e);
        var diffY = startY - currentY;

        var newPosition = (parseInt(lensO.style.top, 10) || 0) + diffY;
        lensO.style.top = newPosition + 'px';

        startY = currentY;
    }

    function stopDrag() {
        isDragging = false;
        moveSound.pause();
        moveSound.currentTime = 0;
    }

    function getTouchCoord(e) {
        if (e.touches && e.touches.length >= 1) {
            return e.touches[0].clientY;
        } else if (e.clientY) {
            return e.clientY;
        }
        return 0;
    }

    wheelC.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', stopDrag);

    wheelC.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', dragMove);
    document.addEventListener('touchend', stopDrag);
    document.addEventListener('touchcancel', stopDrag);

    wheelC.addEventListener('mouseleave', function(e) {
        if (isDragging) {
            e.preventDefault();
        }
    });

    window.addEventListener('blur', function(e) {
        if (isDragging) {
        }
    });
});