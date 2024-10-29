import { DocumentFactory } from "./DocumentFactory.js";
import { PDFDocument } from "../model/PDFDocument.js";

export class PDFDocumentFactory extends DocumentFactory {
    createDocument() {
        return new PDFDocument();
    }
}