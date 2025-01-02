function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

var selected = getQueryParam('selected');
var taskCompleted = getQueryParam('taskCompleted');

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

$(window).on('load', function() {
    var taskWaiting;
    if (taskCompleted == 'null'){taskWaiting = $('.groupFirst');}
    if (taskCompleted == 'First') taskWaiting = $('.groupSecond');
    if (taskCompleted == 'Second') taskWaiting = $('.groupThird');
    if (taskCompleted == 'Third') taskWaiting = $('.groupFourth');
    if (taskCompleted == 'Fourth') taskWaiting = $('.groupFifth');

    $('<img>', {
        'class': 'question',
        'css': {
            'left': taskWaiting.css('left'),
            'top': taskWaiting.css('top')
        },
        'src': 'images/main/question.png',
        'alt': '跳转按钮'
    }).appendTo('.container');

    $('.question').on('click touchend', function() {
        var targetPage;
        if(taskCompleted == 'null') targetPage = 'taskFirst.html';
        if (taskCompleted == 'First') targetPage = 'taskSecond.html';
        if (taskCompleted == 'Second') targetPage = 'taskThird.html';
        if (taskCompleted == 'Third') targetPage = 'taskFourth.html';
        if (taskCompleted == 'Fourth') targetPage = 'taskFifth.html';

        window.location.href = `${targetPage}?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
    });

    $('#buttonBack').click(function(){
        window.location.href = 'paintingSelect.html';
    });

    $('img[class^="group"]').on('click touchend', function() {
        var className = $(this).attr('class');
        var taskNum;
        if(className=="groupFirst"){taskNum = "First";}
        if(className=="groupSecond"){taskNum = "Second";}
        if(className=="groupThird"){taskNum = "Third";}
        if(className=="groupFourth"){taskNum = "Fourth";}
        if(className=="groupFifth"){taskNum = "Fifth";}

        var newImages = [
            { 
                class: 'profileTask', 
                src: 'images/main/profileTask'+taskNum+'.png', 
                alt: '介绍' 
            },
            { 
                class: 'buttonClose', 
                src: 'images/main/buttonClose.png', 
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

    $('.container').on('click touchend', '.buttonClose', function() {
        $('.profileTask, .buttonClose').remove();
    });
});