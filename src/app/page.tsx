import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-background-gray p-2 md:p-16">
      <div className="flex w-full max-w-3xl flex-col gap-8 overflow-auto rounded-xl bg-white p-6 md:p-16">
        <h1 className="font-ubuntu text-xl font-bold  leading-relaxed md:text-4xl">
          Gerador de Ementas
        </h1>
        <Steps />
      </div>
    </div>
  );
}
