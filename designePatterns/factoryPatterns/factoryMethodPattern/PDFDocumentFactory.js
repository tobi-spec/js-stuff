import { DocumentFactory } from "./DocumentFactory.js";
import { PDFDocument } from "./PDFDocument.js";

export class PDFDocumentFactory extends DocumentFactory {
    createDocument() {
        return new PDFDocument();
    }
}