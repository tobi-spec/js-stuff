import {Store} from "./Store.js";
import {NotificationService} from "./NotificationService.js";
import {EmailMsgListener} from "./EmailMsgListener.js";

const store = new Store(new NotificationService())

const notificationService = store.getNotificationService()

notificationService.subscribe(
    new EmailMsgListener("Mark@yahoo.com")
)

notificationService.subscribe(
    new EmailMsgListener("clara@google.com")
)

store.newItemPromotion()