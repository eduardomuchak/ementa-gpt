"use client";
import { FileDropzone } from "../FileDropzone";

export function FileStep() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <span className="font-ubuntu text-base leading-relaxed">
        Arraste o arquivo da decisão para a caixa verde ou clique para
        selecionar
      </span>
      <div className="flex h-80 w-full items-center justify-center rounded-xl bg-green-primary-light p-8">
        <FileDropzone />
      </div>
      <span className="font-ubuntu text-sm leading-relaxed text-red-500">
        * Somente arquivos no formato .docx e .txt são aceitos. O arquivo não
        será armazenado.
      </span>
    </div>
  );
}
