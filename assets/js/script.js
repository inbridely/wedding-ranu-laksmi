const timer = new Countdown('2022-10-01T11:00:00');

setInterval(refreshCountdown, 1000 * 60);

refreshCountdown();

function refreshCountdown() {
    const { days, hours, minutes } = timer.getTimeRemaining();
    $("#countdown-days").text(days < 10 ? `0${days}` : days);
    $("#countdown-hours").text(hours < 10 ? `0${hours}` : hours);
    $("#countdown-minutes").text(minutes < 10 ? `0${minutes}` : minutes);
}