"use client";

import { Provider as ChakraUiProvider } from "@/components/ui/provider";

export default function MainProvider(props: { children: React.ReactNode }) {
  return <ChakraUiProvider>{props.children}</ChakraUiProvider>;
}
