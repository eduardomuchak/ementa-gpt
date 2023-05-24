"use client";
import "./style.css";

import * as Tabs from "@radix-ui/react-tabs";
import { FileStep } from "../FileStep";
import { FormStep } from "../FormStep";

export function Steps() {
  return (
    <Tabs.Root className="TabsRoot" defaultValue="textTab">
      <Tabs.List className="TabsList mb-10">
        <Tabs.Trigger className="TabsTrigger" value="textTab">
          Digitar Acórdão
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="fileTab">
          Anexar Arquivo
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="textTab" className="">
        <FormStep />
      </Tabs.Content>
      <Tabs.Content value="fileTab" className="">
        <FileStep />
      </Tabs.Content>
    </Tabs.Root>
  );
}
