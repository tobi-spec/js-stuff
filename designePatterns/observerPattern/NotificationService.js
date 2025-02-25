export class NotificationService {
    customers = []

    subscribe(customer) {
        this.customers.push(customer)
    }

    unsubscribe(customer) {
        this.customers.remove(customer)
    }

    notifyCustomers() {
        this.customers.forEach(customer => customer.update())
    }


}