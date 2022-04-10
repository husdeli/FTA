export interface FileTranslator {
  translate(file: File): Promise<File | Blob | URL>;
}
