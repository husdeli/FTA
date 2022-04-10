import { jsPDF } from 'jspdf';
import { PdfConstructorContract } from './PdfConstructor.types';

export class PdfConstructor implements PdfConstructorContract {
  async createPdf() {
    return new jsPDF();
  }
}
