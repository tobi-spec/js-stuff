import {DocumentFactory} from "./DocumentFactory.js";
import {WordDocument} from "../model/WordDocument.js";

export class WordDocumentFactory extends DocumentFactory {

    createDocument() {
        return new WordDocument()
    }
}