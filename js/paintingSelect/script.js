$(document).ready(function() {
    function createUrl(selected, taskCompleted) {
        return `mainPage.html?selected=${encodeURIComponent(selected)}&taskCompleted=${encodeURIComponent(taskCompleted)}`;
    }

    $('#buttonSelectFirst').click(function() {
        window.location.href = createUrl('paintingFirst', null);
    });
    
    $('#buttonSelectSecond').click(function() {
        window.location.href = createUrl('paintingSecond', null);
    });

    $('#buttonSelectThird').click(function() {
        window.location.href = createUrl('paintingThird', null);
    });

    $('#buttonSelectFourth').click(function() {
        window.location.href = createUrl('paintingFourth', null);
    });
});