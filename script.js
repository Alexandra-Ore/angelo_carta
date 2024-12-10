// Archivo: script.js
document.getElementById('playAudio').addEventListener('click', () => {
  const audio = document.getElementById('audio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
