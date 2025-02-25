import {Singleton} from "./Singleton.js";


const singleton1 = new Singleton
singleton1.showMessage()

const singleton2 = Singleton.getInstance()
singleton2.showMessage()


