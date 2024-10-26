const audios = document.querySelectorAll('.audio-player');

audios.forEach(audio => {
    audio.addEventListener('play', () => {
        // Pausa todas las canciones excepto la que se acaba de iniciar
        audios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherAudio.currentTime = 0; // Reinicia la canción
            }
        });
    });
});