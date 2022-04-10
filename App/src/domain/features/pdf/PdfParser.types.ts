import { PDFDocumentProxy } from 'pdfjs-dist';

export interface PdfParserContract {
  parse(file: File): Promise<PDFDocumentProxy>;
}
