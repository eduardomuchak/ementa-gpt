"use client";

import { postUploadArquivoTXT } from "@/services/upload";
import { CheckCircle, File, Upload } from "lucide-react";
import { useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import { Ementa } from "../Ementa";

interface FileDropzoneProps {
  loading: {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
  };
  result: {
    result: string | null;
    setResult: (value: string | null) => void;
  };
}

export function FileDropzone({ loading, result }: FileDropzoneProps) {
  const { setIsLoading } = loading;
  const { setResult, result: resultProp } = result;
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      // reader.onabort = () => console.log('file reading was aborted');
      // reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        // const binaryStr = reader.result;
        // console.log(binaryStr);
      };
      setFile(acceptedFiles[0]);
      reader.readAsArrayBuffer(file);
    });
  }, []);

  async function handleUpload() {
    if (!file) return;
    setIsLoading(true);
    const fileData = new FormData();
    fileData.append("file", file);
    const { data } = await postUploadArquivoTXT(fileData);
    setResult(data.data);
  }

  if (resultProp) {
    return (
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div className="flex flex-col items-center justify-center gap-4">
            <CheckCircle className="h-20 w-20" color="#34CB79" />
            <span className="font-ubuntu text-base font-bold ">
              Ementa gerada com sucesso!
            </span>
            <div className="flex flex-row gap-4">
              <button
                className="rounded-xl bg-red-500 px-3 py-2 text-base font-bold text-white"
                onClick={() => {
                  setFile(null);
                  setResult(null);
                }}
              >
                Tentar novamente
              </button>
              <Ementa result={resultProp} />
            </div>
          </div>
        )}
      </Dropzone>
    );
  }

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center space-y-4 rounded-xl border-2 border-dashed border-green-primary-dark">
          {file ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <File className="h-10 w-10" color="#34CB79" />
              <span className="font-ubuntu text-base font-bold ">
                {file.name}
              </span>
              <div className="flex flex-row gap-4">
                <button
                  className="rounded-xl bg-red-500 px-3 py-2 text-base font-bold text-white"
                  onClick={() => setFile(null)}
                >
                  Cancelar
                </button>
                <button
                  className="rounded-xl bg-green-500 px-3 py-2 text-base font-bold text-white"
                  type="button"
                  onClick={() => handleUpload()}
                >
                  Gerar Ementa
                </button>
              </div>
            </div>
          ) : (
            <div
              {...getRootProps()}
              className="flex flex-col items-center justify-center gap-4"
            >
              <input {...getInputProps()} />
              <Upload className="h-10 w-10" color="#34CB79" />
              <span className="font-ubuntu text-base font-bold ">
                Insira o texto da decisão ou arraste o arquivo
              </span>
            </div>
          )}
        </div>
      )}
    </Dropzone>
  );
}
