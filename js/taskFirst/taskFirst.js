
var button = document.querySelector('.dock_kettle');
var water = document.querySelector('.water');
button.addEventListener('click', function(){
    water.style.opacity='1';
})

var back_button=document.querySelector('.close_button');
back_button.addEventListener('click',function(){
    window.location.href = 'mainPage.html';
})