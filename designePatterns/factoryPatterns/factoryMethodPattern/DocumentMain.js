import {PDFDocumentFactory} from "./factory/PDFDocumentFactory.js";
import {WordDocumentFactory} from "./factory/WordDocumentFactory.js";
import {CSVDocumentFactory} from "./factory/CSVDocumentFactory.js";


const pdfFactory = new PDFDocumentFactory();
pdfFactory.openDocument(); // Output: Open PDF document

const wordFactory = new WordDocumentFactory()
wordFactory.openDocument()

const csvFactory = new CSVDocumentFactory()
csvFactory.createDocument().open()