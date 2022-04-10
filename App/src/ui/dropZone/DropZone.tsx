import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDrop } from '../../hooks/useDrop';

const supportedTypes = ['application/pdf'];

export function DropZone() {
  const { setDrop } = useDrop();

  const onDrop = useCallback((files: File[]) => {
    const fileToTranslate = files.find((file) =>
      supportedTypes.includes(file.type)
    );

    if (!fileToTranslate) {
      throw new Error('File with this extension is not supported yet');
    }

    setDrop(fileToTranslate);
  }, []);

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDrop
  });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      )}
    </div>
  );
}
