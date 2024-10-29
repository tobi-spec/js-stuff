import {PDFDocumentFactory} from "./PDFDocumentFactory.js";
import {WordDocumentFactory} from "./WordDocumentFactory.js";
import {CSVDocumentFactory} from "./CSVDocumentFactory.js";


const pdfFactory = new PDFDocumentFactory();
pdfFactory.openDocument(); // Output: Open PDF document

const wordFactory = new WordDocumentFactory()
wordFactory.openDocument()

const csvFactory = new CSVDocumentFactory()
csvFactory.createDocument().open()