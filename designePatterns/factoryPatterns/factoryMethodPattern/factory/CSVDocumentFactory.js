import {DocumentFactory} from "./DocumentFactory.js";
import {CSVDocument} from "../model/CSVDocument.js";

export class CSVDocumentFactory extends DocumentFactory {

    createDocument() {
        return new CSVDocument()
    }
}