export class Singleton {
    instance = null

    constructor() {
        if(Singleton.instance) {
            throw new Error("use getInstance to access the instance")
        }
        console.log("Singleton instance created")
        return Singleton.instance = this
    }


    static getInstance() {
        if(!Singleton.instance == null) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }

    showMessage() {
        console.log("Hello from Singelton instance")
    }
}