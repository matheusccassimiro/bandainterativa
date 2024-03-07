const tpt = document.getElementById("tpt");
const tbn = document.getElementById("tbn");
const sax = document.getElementById("sax");
const pno = document.getElementById("pno");
const bss = document.getElementById("bss");
const drm = document.getElementById("drm");


function mutar(escolha) {
    let instrumento = document.getElementById(escolha)
    let audio = document.getElementById("audio" + escolha);
    const isMuted = instrumento.classList.contains('muted');
    if (!isMuted) {
        instrumento.classList.add("muted")
        audio.volume = 0;
    } else {
        instrumento.classList.remove("muted")

        audio.volume = 1;
    }
}


function play() {
    let tpt = document.getElementById("audiotpt");
    let tbn = document.getElementById("audiotbn");
    let sax = document.getElementById("audiosax");
    let pno = document.getElementById("audiopno");
    let bss = document.getElementById("audiobss");
    let drm = document.getElementById("audiodrm");
    let playbtn = document.getElementById("play-btn");

    const isPlaying = playbtn.classList.contains('play');

    if (!isPlaying) {
        tpt.play()
        tbn.play()
        sax.play()
        pno.play()
        bss.play()
        drm.play()
        playbtn.classList.add('play')
        playbtn.src = "/src/img/pause.png"

        /*        audiotpt.classList.add('play')
                audiotbn.classList.add('play')
                audiosax.classList.add('play')
                audiopno.classList.add('play')
                audiobss.classList.add('play')
                audiodrm.classList.add('play')
        */
    }
    else {
        tpt.pause()
        tbn.pause()
        sax.pause()
        pno.pause()
        bss.pause()
        drm.pause()
        playbtn.classList.remove('play')
        playbtn.src = "/src/img/play.png"
        /*
        audiotpt.classList.remove('play')
        audiotbn.classList.remove('play')
        audiosax.classList.remove('play')
        audiopno.classList.remove('play')
        audiobss.classList.remove('play')
        audiodrm.classList.remove('play')
        */
    }


}




/*

//Play paus btn handler
function playPauseHandler() {
    image.classList.add('play');
    playBtn.querySelector('.fas').classList.remove('fa-play');
    playBtn.querySelector('.fas').classList.add('fa-pause');
}

//Play song
function playSong() {
    playPauseHandler();
    audio.play();
}

//Pause song
function pauseSong() {
    playBtn.querySelector('.fas').classList.remove('fa-pause');
    playBtn.querySelector('.fas').classList.add('fa-play');
    image.classList.remove('play');
    audio.pause();
}

playBtn.addEventListener('click', () => {
    const isPlaying = image.classList.contains('play');
    if (!isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

*/