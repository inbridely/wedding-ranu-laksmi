const timer = new Countdown('2022-10-01T11:00:00');

setInterval(refreshCountdown, 1000 * 60);

refreshCountdown();

function refreshCountdown() {
    const { days, hours, minutes } = timer.getTimeRemaining();
    $("#countdown-days").text(days < 10 ? `0${days}` : days);
    $("#countdown-hours").text(hours < 10 ? `0${hours}` : hours);
    $("#countdown-minutes").text(minutes < 10 ? `0${minutes}` : minutes);
}

// AOS.init();

let isPlaying = false;

$("#btn-player-player").click(function() {
    isPlaying = !isPlaying;

    $("#player-play").attr('hidden', isPlaying)
    $("#player-pause").attr('hidden', !isPlaying)

    if (isPlaying) {
        $("#audio-player")[0].play();
        console.log("play");
    } else {
        $("#audio-player")[0].pause();
        console.log("pause");
    }
});