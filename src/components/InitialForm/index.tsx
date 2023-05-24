"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";
import { FileDropzone } from "../FileDropzone";

const formSchema = z.object({
  peticaoInicial: z.string().nonempty(),
});

type FormSchema = z.infer<typeof formSchema>;

export function InitialForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      peticaoInicial: "",
    },
    resolver: zodResolver(formSchema),
  });

  const [result, setResult] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: FormSchema) {
    setIsLoading(true);
    const response = await axios.post("api/openai", {
      prompt: data.peticaoInicial,
    });
    setResult(JSON.stringify(response.data.result));
  }

  useEffect(() => {
    if (result) {
      setIsLoading(false);
    }
  }, [result]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label
              className="font-ubuntu text-base font-bold uppercase"
              htmlFor={"peticaoInicial"}
            >
              ACÓRDÃO:
              <textarea
                className="mt-1 flex w-full flex-row justify-between rounded-lg border-green-primary-dark bg-input px-7 py-4 font-ubuntu text-gray-800 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-primary-dark"
                id="peticaoInicial"
                {...register("peticaoInicial")}
              />
            </label>
            {errors.peticaoInicial?.message ? (
              <span className="mt-1 font-ubuntu text-xs font-medium text-red-500">
                {errors.peticaoInicial?.message}
              </span>
            ) : null}
          </div>

          <div className="flex h-80 w-full items-center justify-center rounded-xl bg-green-primary-light p-8">
            {isLoading ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4">
                <span className="font-ubuntu text-2xl font-bold">
                  Gerando ementa...
                </span>
              </div>
            ) : (
              <FileDropzone />
            )}
          </div>
        </div>

        <button
          type={"submit"}
          className="rounded-xl bg-green-500 px-3 py-2 text-base font-bold text-white"
        >
          Confirmar
        </button>
      </form>
      {result ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="font-ubuntu text-base font-bold ">{result}</span>
        </div>
      ) : null}
    </>
  );
}
