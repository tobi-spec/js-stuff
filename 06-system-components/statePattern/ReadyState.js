class ReadyState extends State{

    constructor(phone) {
        super(phone);
    }

    onHome() {
        return this.phone.home()
    }

    onOffOn() {
        this.phone.setState(new OffState(this.phone))
        return this.phone.lock()
    }

}