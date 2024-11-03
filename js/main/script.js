function toggleMusic(){
	var audio = document.getElementById("backgroundMusic");
	if(audio.paused){
		audio.play();
	}
	else{
		audio.pause();
	}
}