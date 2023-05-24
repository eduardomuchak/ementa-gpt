import { JellyTriangle } from "@uiball/loaders";
export function Loading() {
  return (
    <div className="flex min-h-[400.75px] flex-1 flex-col items-center justify-center space-y-6">
      <JellyTriangle size={60} speed={1.75} color="#34CB79" />
      <div className="flex flex-col items-center justify-center space-x-1">
        <h1 className="font-ubuntu text-4xl font-bold leading-relaxed">
          Gerando Ementa...
        </h1>
        <span className="font-ubuntu text-xl font-bold leading-relaxed">
          O processo pode demorar alguns minutos
        </span>
      </div>
    </div>
  );
}
