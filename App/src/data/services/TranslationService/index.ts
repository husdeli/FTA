import { TranslatorContract } from '@domain/types';

export class TranslationService implements TranslatorContract {
  translate(textContent: string): Promise<string> {
    return Promise.resolve(`Translated Content ${textContent}`);
  }
}
