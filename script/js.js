const video = document.querySelector('.video');
const play = document.querySelector('.play');
function toggleVideo(){
    if(video.paused){
        video.play()
        play.src="img/pause.png"
    }
    else{
        video.pause()
        play.src="img/play.png"
    }
}
play.addEventListener("click",toggleVideo)