class Phone {

    constructor() {
        this.state = new OffState(this)
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state
    }

    turnOn() {
        return "Turning screen on, device still locked";
    }

    unlock() {
        return "Unlock phone and go to home screen";
    }

    lock() {
        return "Locking phone and turning off screen";
    }

    home() {
        return "Go to home screen";
    }
}