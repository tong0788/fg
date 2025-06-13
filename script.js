const video = document.getElementById('camera');
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 啟用鏡頭
navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } })
    .then(stream => {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            video.play();
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
        };
    })
    .catch(err => {
        alert(`無法啟用鏡頭: ${err.name}`);
        console.error('錯誤詳情:', err);
    });

// 渲染鏡頭畫面
function drawGame() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(drawGame);
}

// 開始渲染
video.addEventListener('play', () => {
    drawGame();
});









}    handPose = ml5.handPose({ flipped: true });    }        return;        console.error('ml5.js 未正確加載');    if (typeof ml5 === 'undefined') {function preload() {console.log('ml5:', ml5); // 如果加載成功，應顯示 ml5 物件
