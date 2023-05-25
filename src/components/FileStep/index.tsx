"use client";
import { useEffect, useState } from "react";
import { FileDropzone } from "../FileDropzone";
import { Loading } from "../Loading";

export function FileStep() {
  const [result, setResult] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const resultProp = {
    result,
    setResult,
  };

  const isLoadingProp = {
    isLoading,
    setIsLoading,
  };

  useEffect(() => {
    if (result && result.length > 0) {
      setIsLoading(false);
    }
  }, [result]);

  return (
    <form className="flex flex-col items-center justify-center space-y-4">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!result ? (
            <span className="font-ubuntu text-base leading-relaxed">
              Arraste o arquivo da decisão para a caixa verde ou clique para
              selecionar
            </span>
          ) : (
            <div className="h-[26px]" />
          )}
          <div className="flex h-80 w-full items-center justify-center rounded-xl bg-green-primary-light p-4 md:p-8">
            <FileDropzone result={resultProp} loading={isLoadingProp} />
          </div>
          {!result ? (
            <span className="font-ubuntu text-sm leading-relaxed text-red-500">
              * Somente arquivos no formato .txt são aceitos. O arquivo não será
              armazenado.
            </span>
          ) : (
            <div className="h-[22.75px]" />
          )}
        </>
      )}
    </form>
  );
}
