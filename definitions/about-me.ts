import { ReactNode } from "react";

export interface IAboutMeService {
  
  title: string;
  description: string;
  icon: ReactNode
  span?: boolean
}