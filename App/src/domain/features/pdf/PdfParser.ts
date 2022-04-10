import { getDocument } from 'pdfjs-dist';
import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import { PdfParserContract } from './PdfParser.types';

export class PdfParser implements PdfParserContract {
  async parse(file: File): Promise<PDFDocumentProxy> {
    const buffer = await file.arrayBuffer();
    const view = new Uint8Array(buffer);

    const docLoader = getDocument(view);
    return docLoader.promise;
  }
}
