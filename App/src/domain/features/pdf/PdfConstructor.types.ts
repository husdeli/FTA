import { jsPDF } from 'jspdf';

export interface PdfConstructorContract {
  createPdf(): Promise<jsPDF>;
}
