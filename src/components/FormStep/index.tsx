"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Ementa } from "../Ementa";
import { Loading } from "../Loading";

const formSchema = z.object({
  acordao: z.string().nonempty({ message: "Campo obrigatório" }).min(100, {
    message: "O acórdão deve ter no mínimo 100 caracteres",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export function FormStep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    defaultValues: {
      acordao: "",
    },
    resolver: zodResolver(formSchema),
  });

  const [result, setResult] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: FormSchema) {
    setIsLoading(true);
    const response = await axios.post("api/openai", {
      userInput: data.acordao,
    });
    setResult(response.data.result);
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
          {!isLoading ? (
            <>
              <div className="flex flex-col">
                <textarea
                  className="mt-1 flex min-h-[332.75px] w-full flex-row justify-between rounded-lg border-green-primary-dark bg-input px-6 py-4 font-ubuntu text-gray-800 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-primary-dark"
                  placeholder="Digite o acórdão aqui..."
                  id="acordao"
                  {...register("acordao")}
                />

                {errors.acordao?.message ? (
                  <span className="mt-1 font-ubuntu text-xs font-medium text-red-500">
                    {errors.acordao?.message}
                  </span>
                ) : null}
              </div>
              {result ? (
                <div className="flex flex-row gap-4">
                  <button
                    type={"button"}
                    className="rounded-lg bg-red-500 px-3 py-2 text-base font-bold text-white"
                    onClick={() => {
                      setResult(null);
                      reset();
                    }}
                  >
                    Tentar novamente
                  </button>
                  <Ementa result={result} />
                </div>
              ) : (
                <button
                  type={"submit"}
                  className="mt-6 cursor-pointer rounded-lg bg-green-primary-dark px-3 py-2 text-base font-bold text-white"
                >
                  Gerar Ementa
                </button>
              )}
            </>
          ) : (
            <Loading />
          )}
        </div>
      </form>
    </>
  );
}
