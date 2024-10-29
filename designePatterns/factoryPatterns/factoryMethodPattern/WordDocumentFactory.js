import {DocumentFactory} from "./DocumentFactory.js";
import {WordDocument} from "./WordDocument.js";

export class WordDocumentFactory extends DocumentFactory {

    createDocument() {
        return new WordDocument()
    }
}