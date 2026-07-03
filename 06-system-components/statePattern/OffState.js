class OffState extends State {

    constructor(phone) {
        super(phone);
    }

    onHome() {
        this.phone.setState(new LockedState(this.phone))
        return this.phone.turnOn()
    }

    onOffOn() {
        this.phone.setState(new LockedState(this.phone))
        return this.phone.turnOn()
    }
}