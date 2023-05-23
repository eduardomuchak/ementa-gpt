"use client";

import { useState } from "react";
import { InitialForm } from "../InitialForm";

export function Steps() {
  const [step, setStep] = useState<"init" | "loading" | "finish">("init");

  return <>{step === "init" && <InitialForm />}</>;
}
