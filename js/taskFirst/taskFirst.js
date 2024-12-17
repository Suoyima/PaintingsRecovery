var water = document.querySelector('.water');
var kettle = document.querySelector('.dock_kettle');
var brush = document.querySelector('.row_brush');
var towel = document.querySelector('.container_and_towel');
var kettle_sp = document.querySelector('.dock_kettle_sp');
var kettle_explain = document.querySelector('.kettle_explain');
var kettle_question = document.querySelector('.question_kettle');
var brush_question = document.querySelector('.question_row_brush');
var back_button=document.querySelector('.close_button');
var towel_sp=document.querySelector('.towel_sp');
var brush_sp=document.querySelector('.row_brush_sp');
var dirt = document.querySelector('.dirt');
var clickcount_kettle = 0;
var clickcount_brush = 0;
var clickcount_towel = 0;


kettle_sp.addEventListener('click', function(){
    water.style.opacity='1';
    setTimeout(function(){
        kettle_sp.style.display='none';
        kettle_explain.style='none';
        kettle.style.display='block';
        brush.style.display='block';
        towel.style.display='block';
    },2000);
})


back_button.addEventListener('click',function(){
    window.location.href = 'mainPage.html';
})


brush.addEventListener('click', function() {
    clickcount_brush++;
    if (clickcount_brush === 1) {
        brush_question.style.display = 'block';
    } else if (clickcount_brush === 2) {
        brush_question.style.display = 'none';
        brush_sp.style.display = 'block';
        brush.style.display = 'none';
        towel.style.display = 'none';
        kettle.style.display = 'none';
        brush_explain.style.display = 'block';
    }
});

kettle.addEventListener('click', function() {
    clickcount_kettle++;
    if (clickcount_kettle === 1) {
        kettle_question.style.display = 'block';
    } else if (clickcount_kettle === 2) {
        brush.style.display = 'none';
        towel.style.display = 'none';
        kettle.style.display = 'none';
        kettle_sp.style.display = 'block';
        kettle_explain.style.display = 'block';
        kettle_question.style.display = 'none';
    }
});



towel.addEventListener('click', function() {
    clickcount_towel++;
    if (clickcount_towel === 1) {
        towel_question.style.display = 'block';
    } else if (clickcount_towel === 2) {
        towel.style.display = 'none';
        brush.style.display = 'none';
        kettle.style.display = 'none';
        towel_sp.style.display = 'block';
        towel_explain.style.display = 'block';
        towel_question.style.display = 'none';
        
    }
});

brush_sp.addEventListener('click',function(){
    dirt.style.opacity='0';
    setTimeout(function(){
        brush_sp.style.display='none';
        kettle.style.display='block';
        brush.style.display='block';
        towel.style.display='block';
    },2000);
})








