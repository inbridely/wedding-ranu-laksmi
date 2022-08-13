/**
 * Coundown timer
 * created by: Surya Mahadi
 */

class Countdown {
    constructor(deadline) {
        this.deadline = new Date(deadline);
    }

    getTimeRemaining() {
        const now = new Date();
        const diff = this.deadline - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        return {
            days: days < 0 ? 0 : days,
            hours: hours < 0 ? 0 : hours,
            minutes: minutes < 0 ? 0 : minutes
        }
    }
}
