export class EmailMsgListener {

    constructor(email) {
        this.email = email
    }

    update() {
        console.log("Send update to customer via email")
    }
}