function toggleMusic(){
    var audio = document.getElementById("backgroundMusic");
    var button = document.getElementById("buttonMusic");
    
    if (audio.paused) {
        audio.play();
        button.src = "images/start/buttonMusicOn.png";
    } else {
        audio.pause();
        button.src = "images/start/buttonMusicDown.png";
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
        navigateTo('paintingSelect.html');
    }, 1000);
}

$(document).ready(function() {
    var maxBubbles = 20;
    var bubbleCount = 0;

    function createBubble() {
        if (bubbleCount >= maxBubbles) return;

        var $bubble = $('<img>', {
            src: 'images/start/steam-bubble.png',
            class: 'steam-bubble'
        });

        var size = Math.random() * 50 + 20 + 'px';
        $bubble.css({
            'width': size,
            'height': size
        });

        var leftPos = Math.random() * ($('#steam-container').width() - parseInt(size));
        $bubble.css('left', leftPos);

        $('#steam-container').append($bubble);
        bubbleCount++;

        $bubble.on('animationend', function() {
            $(this).remove();
            bubbleCount--;
        });
    }

    setInterval(createBubble, 500);
});