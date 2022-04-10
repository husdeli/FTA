import { TextItem } from 'pdfjs-dist/types/src/display/api';
import { FileTranslator, TranslatorContract } from '../../types';
import { PdfParserContract } from './PdfParser.types';
import { PdfConstructorContract } from './PdfConstructor.types';

function isTextItem(value: unknown): value is TextItem {
  return !!(value as any).str;
}

export class PdfTranslator implements FileTranslator {
  constructor(
    private parser: PdfParserContract,
    private translator: TranslatorContract,
    private pdfConstructor: PdfConstructorContract
  ) {}

  async translate(pdf: File) {
    const doc = await this.parser.parse(pdf);
    const page = await doc.getPage(1);
    const textContent = await page.getTextContent();
    const text = textContent.items.reduce(
      (acc, curr) => (isTextItem(curr) ? `${acc} ${curr.str}` : acc),
      ''
    );

    const translated = await this.translator.translate(text);
    const newPdf = await this.pdfConstructor.createPdf();

    newPdf.text(translated, 10, 10);

    return newPdf.output('bloburl');
  }
}
