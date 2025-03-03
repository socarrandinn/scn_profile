import { ReactNode } from "react";

export type PageProps= Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>
 