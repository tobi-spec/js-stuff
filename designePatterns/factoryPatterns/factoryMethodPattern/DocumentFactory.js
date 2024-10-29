export class DocumentFactory {
    createDocument() {
        throw new Error("Should be overwritten by child class");
    }

    openDocument() {
        const document = this.createDocument();
        document.open();
    }
}