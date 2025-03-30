var prompt_bucket=document.querySelector('.prompt_bucket');
var tip=document.querySelector('.tip');
var paper1=document.querySelector('.paper1');
var paper2=document.querySelector('.paper2');
var paper3=document.querySelector('.paper3');
var paper4=document.querySelector('.paper4');
var paper5=document.querySelector('.paper5');
var choosebutton1=document.querySelector('.choose_button1');
var choosebutton2=document.querySelector('.choose_button2');
var choosebutton3=document.querySelector('.choose_button3');
var choosebutton4=document.querySelector('.choose_button4');
var choosebutton5=document.querySelector('.choose_button5');
var paper_highlight1=document.querySelector('.paper_highlight1');
var paper_highlight2=document.querySelector('.paper_highlight2');
var paper_highlight3=document.querySelector('.paper_highlight3');
var paper_highlight4=document.querySelector('.paper_highlight4');
var paper_highlight5=document.querySelector('.paper_highlight5');
var explain1=document.querySelector('.explain1');
var explain2=document.querySelector('.explain2');
var explain3=document.querySelector('.explain3');
var explain4=document.querySelector('.explain4');
var explain5=document.querySelector('.explain5');
var book=document.querySelector('.book');
var book_back=document.querySelector('.book_back');
var button_prompt=document.querySelector('.buttonPrompt');
var bowl=document.querySelector('.bowl');
var jianghu=document.querySelector('.jianghu');
var bowl_introduction = document.querySelector('.bowl_introduction');
var bowl_function = document.querySelector('.bowl_function');
var book_bucket=document.querySelector('.book_bucket');
var mingzhi=document.querySelector('.mingzhi');
var paper_explain=document.querySelector('.paper_explain');
var paper_function=document.querySelector('.paper_function');
var book_brush= document.querySelector('.book_brush');
var shuazi = document.querySelector('.shuazi');
var brush_explain=document.querySelector('.brush_explain');
var brush_function=document.querySelector('.brush_function');
var arrow=document.querySelector('.arrow');
var book_dock=document.querySelector('.book_dock');
var explain_second=document.querySelector('.explain_second');
var painting=document.querySelector('.painting');
var new_paper=document.querySelector('.new_paper');
var painting_back=document.querySelector('.painting_back');
var choose_num=5;

button_prompt.addEventListener('click',function(){
    book.style.display='block';
    book_back.style.display='block';
    choose_num=1
    numcount();
})

function numcount(){
    if(choose_num==1){
        book_dock.style.display='block';
        arrow.style.display='block';
        bowl.style.display='block';
        jianghu.style.display='block';
        bowl_introduction.style.display='block';
        bowl_function.style.display='block';
        book_bucket.style.display='none';
        mingzhi.style.display='none';
        paper_function.style.display='none';
        paper_explain.style.display='none';
        book_brush.style.display='none';
        shuazi.style.display='none';
        brush_explain.style.display='none';
        brush_function.style.display='none';
    }
    if(choose_num==2){
        bowl.style.display='none';
        jianghu.style.display='none';
        bowl_introduction.style.display='none';
        bowl_function.style.display='none';
        book_bucket.style.display='block';
        mingzhi.style.display='block';
        paper_function.style.display='block';
        paper_explain.style.display='block';
        book_brush.style.display='none';
        shuazi.style.display='none';
        brush_explain.style.display='none';
        brush_function.style.display='none';
    }
    if(choose_num==3){
        bowl.style.display='none';
        jianghu.style.display='none';
        bowl_introduction.style.display='none';
        bowl_function.style.display='none';
        book_bucket.style.display='none';
        mingzhi.style.display='none';
        paper_function.style.display='none';
        paper_explain.style.display='none';
        book_brush.style.display='block';
        shuazi.style.display='block';
        brush_explain.style.display='block';
        brush_function.style.display='block';
    }
    if(choose_num==5){
        bowl.style.display='none';
        jianghu.style.display='none';
        bowl_introduction.style.display='none';
        bowl_function.style.display='none';
        book_bucket.style.display='none';
        mingzhi.style.display='none';
        paper_function.style.display='none';
        paper_explain.style.display='none';
        book_brush.style.display='none';
        shuazi.style.display='none';
        brush_explain.style.display='none';
        brush_function.style.display='none';
        book.style.display='none';
        book_back.style.display='none';
        arrow.style.display='none';
        book_dock.style.display='none';    
    }
    if(choose_num==4){
        choose_num=1;
        numcount();
    }
}

arrow.addEventListener('click',function(){
    choose_num++;
    numcount();
    
})

book_back.addEventListener('click',function(){
    choose_num=5;
    numcount();

})

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

var selected = getQueryParam('selected');
var taskCompleted = getQueryParam('taskCompleted');

function toggleMusic(){
    var audio = document.getElementById("backgroundMusic");
    var button = document.querySelector(".buttonMusic");
    if (audio.paused) {
        audio.play();
        button.src = "images/task1/buttonMusicOn.png";
    } else {
        audio.pause();
        button.src = "images/task1/buttonMusicDown.png";
    }
}

choosebutton1.addEventListener('click',function(){
    paper1.style.display='none';
    paper2.style.display='none';
    paper3.style.display='none';
    paper4.style.display='none';
    paper5.style.display='none';
    paper_highlight1.style.display='none';
    paper_highlight2.style.display='none';
    paper_highlight3.style.display='none';
    paper_highlight4.style.display='none';
    paper_highlight5.style.display='none';
    choosebutton1.style.display='none';
    choosebutton2.style.display='none';
    choosebutton3.style.display='none';
    choosebutton4.style.display='none';
    choosebutton5.style.display='none';
    explain1.style.display='none';
    explain2.style.display='none';
    explain3.style.display='none';
    explain4.style.display='none';
    explain5.style.display='none';
    tip.style.display='none';
    new_paper.src='images/task4/new_paper1.png'
    painting.style.display='block';
    new_paper.style.display='block';
    end()

})

choosebutton2.addEventListener('click',function(){
    paper1.style.display='none';
    paper2.style.display='none';
    paper3.style.display='none';
    paper4.style.display='none';
    paper5.style.display='none';
    paper_highlight1.style.display='none';
    paper_highlight2.style.display='none';
    paper_highlight3.style.display='none';
    paper_highlight4.style.display='none';
    paper_highlight5.style.display='none';
    choosebutton1.style.display='none';
    choosebutton2.style.display='none';
    choosebutton3.style.display='none';
    choosebutton4.style.display='none';
    choosebutton5.style.display='none';
    explain1.style.display='none';
    explain2.style.display='none';
    explain3.style.display='none';
    explain4.style.display='none';
    explain5.style.display='none';
    tip.style.display='none';
    new_paper.src='images/task4/new_paper2.png'
    painting.style.display='block';
    new_paper.style.display='block';
    end()

})

choosebutton3.addEventListener('click',function(){
    paper1.style.display='none';
    paper2.style.display='none';
    paper3.style.display='none';
    paper4.style.display='none';
    paper5.style.display='none';
    paper_highlight1.style.display='none';
    paper_highlight2.style.display='none';
    paper_highlight3.style.display='none';
    paper_highlight4.style.display='none';
    paper_highlight5.style.display='none';
    choosebutton1.style.display='none';
    choosebutton2.style.display='none';
    choosebutton3.style.display='none';
    choosebutton4.style.display='none';
    choosebutton5.style.display='none';
    explain1.style.display='none';
    explain2.style.display='none';
    explain3.style.display='none';
    explain4.style.display='none';
    explain5.style.display='none';
    tip.style.display='none';
    new_paper.src='images/task4/new_paper3.png'
    painting.style.display='block';
    new_paper.style.display='block';
    end()

})

choosebutton4.addEventListener('click',function(){
    paper1.style.display='none';
    paper2.style.display='none';
    paper3.style.display='none';
    paper4.style.display='none';
    paper5.style.display='none';
    paper_highlight1.style.display='none';
    paper_highlight2.style.display='none';
    paper_highlight3.style.display='none';
    paper_highlight4.style.display='none';
    paper_highlight5.style.display='none';
    choosebutton1.style.display='none';
    choosebutton2.style.display='none';
    choosebutton3.style.display='none';
    choosebutton4.style.display='none';
    choosebutton5.style.display='none';
    explain1.style.display='none';
    explain2.style.display='none';
    explain3.style.display='none';
    explain4.style.display='none';
    explain5.style.display='none';
    tip.style.display='none';
    new_paper.src='images/task4/new_paper4.png'
    painting.style.display='block';
    new_paper.style.display='block';
    end()

})

choosebutton5.addEventListener('click',function(){
    paper1.style.display='none';
    paper2.style.display='none';
    paper3.style.display='none';
    paper4.style.display='none';
    paper5.style.display='none';
    paper_highlight1.style.display='none';
    paper_highlight2.style.display='none';
    paper_highlight3.style.display='none';
    paper_highlight4.style.display='none';
    paper_highlight5.style.display='none';
    choosebutton1.style.display='none';
    choosebutton2.style.display='none';
    choosebutton3.style.display='none';
    choosebutton4.style.display='none';
    choosebutton5.style.display='none';
    explain1.style.display='none';
    explain2.style.display='none';
    explain3.style.display='none';
    explain4.style.display='none';
    explain5.style.display='none';
    tip.style.display='none';
    new_paper.src='images/task4/new_paper5.png'
    painting.style.display='block';
    new_paper.style.display='block';
    end()

})

function end(){
    painting.style.display='block';
    painting_back.style.display='none';
    
    
    var newImages = [
        {class: 'backgroundProgressbar', src: 'images/progressbar/background.png', alt: '背景图'},
        {class: 'progressbar', src: 'images/progressbar/bar.png', alt: '进度条底'},
        {class: 'progressbarPrompt', src: 'images/progressbar/prompt.png', alt: '提示'}
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
        'width': '63.5%'
    }, {
        duration: 1500,
        complete: function(){
            taskCompleted = "Fourth";
            window.location.href = `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
        }
    });
}

function set_grue(){
    var grue = document.querySelector('.grue');
    var prompt_brush = document.querySelector('.prompt_brush');
    
    console.log(grue);
    grue.style.opacity = '1';
    prompt_brush.style.display='none';
    setTimeout(function(){
      prompt_bucket.style.display='block';
      var explain=document.querySelector('.explain');
      var explain_second=document.querySelector('.explain_second');
      explain.style.display='none';
      explain_second.style.display='block';
    },2000);
}
  
prompt_bucket.addEventListener('click',function(){
    tip.style.display='block';
    paper1.style.display='block';
    paper2.style.display='block';
    paper3.style.display='block';
    paper4.style.display='block';
    paper5.style.display='block';
    prompt_bucket.style.display='none';
})

paper1.addEventListener('click',function(){
    choosebutton1.style.display='block';
    paper_highlight1.style.display='block';
    choosebutton2.style.display='none';
    choosebutton3.style.display='none';
    choosebutton4.style.display='none';
    choosebutton5.style.display='none';
    paper_highlight2.style.display='none';
    paper_highlight3.style.display='none';
    paper_highlight4.style.display='none';
    paper_highlight5.style.display='none';
    explain1.style.display='block';
    explain2.style.display='none';
    explain3.style.display='none';
    explain4.style.display='none';
    explain5.style.display='none';
})
paper2.addEventListener('click',function(){
    choosebutton2.style.display='block';
    paper_highlight2.style.display='block';
    choosebutton1.style.display='none';
    choosebutton3.style.display='none';
    choosebutton4.style.display='none';
    choosebutton5.style.display='none';
    paper_highlight1.style.display='none';
    paper_highlight3.style.display='none';
    paper_highlight4.style.display='none';
    paper_highlight5.style.display='none';
    explain2.style.display='block';
    explain1.style.display='none';
    explain3.style.display='none';
    explain4.style.display='none';
    explain5.style.display='none';
})
paper3.addEventListener('click',function(){
    choosebutton3.style.display='block';
    paper_highlight3.style.display='block';
    choosebutton2.style.display='none';
    choosebutton1.style.display='none';
    choosebutton4.style.display='none';
    choosebutton5.style.display='none';
    paper_highlight2.style.display='none';
    paper_highlight1.style.display='none';
    paper_highlight4.style.display='none';
    paper_highlight5.style.display='none';
    explain3.style.display='block';
    explain2.style.display='none';
    explain1.style.display='none';
    explain4.style.display='none';
    explain5.style.display='none';
})
paper4.addEventListener('click',function(){
    choosebutton4.style.display='block';
    paper_highlight4.style.display='block';
    choosebutton2.style.display='none';
    choosebutton3.style.display='none';
    choosebutton1.style.display='none';
    choosebutton5.style.display='none';
    paper_highlight2.style.display='none';
    paper_highlight3.style.display='none';
    paper_highlight1.style.display='none';
    paper_highlight5.style.display='none';
    explain4.style.display='block';
    explain2.style.display='none';
    explain3.style.display='none';
    explain1.style.display='none';
    explain5.style.display='none';
})
paper5.addEventListener('click',function(){
    choosebutton5.style.display='block';
    paper_highlight5.style.display='block';
    choosebutton2.style.display='none';
    choosebutton3.style.display='none';
    choosebutton4.style.display='none';
    choosebutton1.style.display='none';
    paper_highlight2.style.display='none';
    paper_highlight3.style.display='none';
    paper_highlight4.style.display='none';
    paper_highlight1.style.display='none';
    explain5.style.display='block';
    explain2.style.display='none';
    explain3.style.display='none';
    explain4.style.display='none';
    explain1.style.display='none';
})

$(document).ready(function(){

    $('.prompt_brush').on('click', function(){

        $('.brush').css({
            'left': '20%', 
            'top': '30%', 
            'display': 'block' 
        }).animate({
            'left': '90%' 
        }, 1500,function() {
            $(this).css('display', 'none');
            set_grue();
        });
    });

    $('.buttonClose').click(function(){
        window.location.href = `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
    });

})