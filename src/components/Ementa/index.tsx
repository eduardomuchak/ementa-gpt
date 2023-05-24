import * as Dialog from "@radix-ui/react-dialog";

import { useState } from "react";
import { animated, config, useTransition } from "react-spring";

export function Ementa({ result }: { result: string }) {
  const [open, setOpen] = useState(false);

  const transitions = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="cursor-pointer rounded-lg bg-green-primary-dark px-3 py-2 text-base font-bold text-white">
        Ver resultado
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md`}
        />
        {transitions((style, item) =>
          item ? (
            <animated.div style={style}>
              <Dialog.Content className="fixed inset-0 m-auto flex h-fit w-full max-w-2xl flex-col justify-center gap-6 rounded-xl bg-white p-16 shadow-lg">
                <Dialog.Title className="text-center font-ubuntu text-2xl font-bold leading-relaxed">
                  Ementa gerada com sucesso!
                </Dialog.Title>
                <Dialog.Description className="text-left font-ubuntu text-base leading-relaxed">
                  {result}
                </Dialog.Description>
              </Dialog.Content>
            </animated.div>
          ) : null
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
