"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    defaultValues: {
      peticaoInicial: "",
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <div className="space-y-6">
        <div className="flex flex-col">
          <label
            className="font-ubuntu text-base font-bold uppercase"
            htmlFor={"peticaoInicial"}
          >
            Digite o nome da ação conforme petição inicial:
            <input
              className="relative z-auto mt-1 flex h-14 w-full appearance-none flex-row justify-between rounded-xl border-green-primary-dark bg-input px-7 py-4 font-ubuntu text-gray-800 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-primary-dark"
              type="text"
              id="peticaoInicial"
              {...register("peticaoInicial")}
              maxLength={255}
            />
          </label>
          {errors.peticaoInicial?.message ? (
            <span className="mt-1 font-ubuntu text-xs font-medium text-red-500">
              {errors.peticaoInicial?.message}
            </span>
          ) : null}
        </div>

        <div className="flex h-80 w-full items-center justify-center rounded-xl bg-green-primary-light p-8">
          <FileDropzone />
        </div>
      </div>
    </form>
  );
}
