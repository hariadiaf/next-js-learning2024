"use client";

import { ColorModeButton } from "@/components/ui/color-mode";
import { Provider as ChakraUiProvider } from "@/components/ui/provider";

export default function MainProvider(props: { children: React.ReactNode }) {
  return (
    <ChakraUiProvider>
      <ColorModeButton />
      {props.children}
    </ChakraUiProvider>
  );
}
