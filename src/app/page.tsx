import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-background-gray py-16">
      <div className="flex w-full max-w-3xl flex-col gap-16 overflow-auto rounded-xl bg-white p-16">
        <div>
          <h1 className="font-ubuntu text-4xl font-bold leading-relaxed">
            Gerador de Ementas
          </h1>
        </div>
        <Steps />
      </div>
    </div>
  );
}
