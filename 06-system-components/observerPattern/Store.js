export class Store {

    constructor(notificationService) {
        this.notificationService = notificationService
    }

    newItemPromotion() {
        this.notificationService.notifyCustomers()
    }

    getNotificationService() {
        return this.notificationService
    }
}