import React, { useCallback } from 'react';
import classNames from 'classnames';
import { PdfTranslator, PdfParser } from '@domain/features/pdf';
import { TranslationService } from '@data/services';
import { useDrop } from '../../hooks/useDrop';
import { PdfConstructor } from '../../domain/features/pdf/PdfConstructor';

const translator = new PdfTranslator(
  new PdfParser(),
  new TranslationService(),
  new PdfConstructor()
);

export function DropActions() {
  const {
    state: { drop }
  } = useDrop();

  const translate = useCallback(async () => {
    if (drop) {
      const result = await translator.translate(drop);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = result.toString();
      a.download = 'translated.pdf';
      document.body.appendChild(a);
      a.click();
    }
  }, [drop]);

  return (
    <button
      type="button"
      disabled={!drop}
      className={classNames(
        drop ? 'bg-pink-500' : 'bg-gray-400 pointer-events-none',
        'px-4 py-2 rounded-3xl text-2xl font-serif font-semibold text-white'
      )}
      onClick={translate}
    >
      Translate
    </button>
  );
}
