var button_left=document.querySelector('.button_left');
var button_right=document.querySelector('.button_right');


function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}
  
  // 函数：检测用户是否在iOS设备上
function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}


button_left.addEventListener('click', function() {
    
    var link = document.createElement('a');
    link.href = 'images/call_back/share.png';
    link.download = 'sharing'; // 指定下载后的文件名
    document.body.appendChild(link);
    link.click(); // 触发下载
    document.body.removeChild(link); // 下载后移除a标签

    // 提示用户
    alert('图片已保存到您的设备上！');
})

button_right.addEventListener('click',function(){
    window.location.href='paintingSelect.html';
})