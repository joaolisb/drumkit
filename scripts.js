function playMe(e) {
    if(e.key === ' ' || e.key === "Enter") {
        e.preventDefault();
        return;
    }
    const audio = document.querySelector(`audio[class=${e.key}]`);
    const key = document.querySelector(`button[class="key ${e.key}"]`);
    if(!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    this.setTimeout(function() {
        key.classList.remove('playing');
    }, 100)
}

window.addEventListener('keydown', playMe);

function playYou(e) {
    const audio = document.querySelector(`audio[class=${e}]`);
    const key = document.querySelector(`button[class="key ${e}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    this.setTimeout(function() {
        key.classList.remove('playing');
    }, 100)
}