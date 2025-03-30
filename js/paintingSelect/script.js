$(document).ready(function() {
    function createUrl(selected, taskCompleted) {
        return `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
    }

    $('#paintingFirst').click(function() {
        window.location.href = createUrl('paintingFirst', null);
    });
    
    $('#paintingSecond').click(function() {
        window.location.href = createUrl('paintingSecond', null);
    });

    $('#paintingThird').click(function() {
        window.location.href = createUrl('paintingThird', null);
    });

    $('#paintingFourth').click(function() {
        window.location.href = createUrl('paintingFourth', null);
    });
});