function playAudio(key) {
    const audio = document.getElementById(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    const display = document.getElementById('display');
    const description = audio.parentElement.id.replace(/-/g, ' ');
    display.innerText = description;
    const button = audio.parentElement;
    button.classList.add('active-pad');
    setTimeout(() => button.classList.remove('active-pad'), 100);
}
document.querySelectorAll('.drum-pad').forEach(pad => {
    pad.addEventListener('click', () => {
        const key = pad.innerText.trim();
        playAudio(key);
    });
});
document.addEventListener('keydown', (event) => {
    const keyPressed = event.key.toUpperCase();
    playAudio(keyPressed);
});