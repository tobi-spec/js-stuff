class LockedState extends State{

    constructor(phone) {
        super(phone);
    }

    onHome() {
        this.phone.setState(new ReadyState(this.phone))
        return this.phone.unlock()
    }

    onOffOn() {
        this.phone.setState(new OffState(this.phone))
        return this.phone.lock()
    }
}