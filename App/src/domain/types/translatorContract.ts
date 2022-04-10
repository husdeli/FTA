export interface TranslatorContract {
  translate(textContent: string): Promise<string>;
}
