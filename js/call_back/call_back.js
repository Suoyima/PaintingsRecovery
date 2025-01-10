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
    
    if (isAndroid()) {
      shareImage(); // 如果是安卓设备，使用Web Share API分享图片
    } else {
        downloadImage();
    }
  });

async function shareImage(){
    const imageUrl = 'images/call_back/share.png';
  
    if (navigator.share) {
      try {
        const file = await fetch(imageUrl).then(r => r.blob());
        const fileUrl = URL.createObjectURL(file);
        await navigator.share({
          title: 'Share Image',
          text: 'Check out this cool image!',
          url: fileUrl,
        });
        alert('图片已分享，请选择保存到相册。');
      } catch (error) {
        alert('分享失败，请重试。');
      }
    } else {
      alert('您的浏览器不支持分享功能。');
    }
}

function downloadImage(){
    
    // 创建一个隐藏的a标签
    var link = document.createElement('a');
    link.href = 'images/call_back/share.png';
    link.download = 'sharing'; // 指定下载后的文件名
    document.body.appendChild(link);
    link.click(); // 触发下载
    document.body.removeChild(link); // 下载后移除a标签

    // 提示用户
    alert('图片已保存到您的设备上！');
}

button_right.addEventListener('click',function(){
    window.location.href='paintingSelect.html';
})