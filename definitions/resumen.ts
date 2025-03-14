import { ReactNode } from "react";

export interface ITimeLine{
  dateRange: string;
  jobTitle: string;
  companyName: string;
  description: string;
  buttonText?: string;
  icon?: ReactNode;
  iconColor?: string;
  className?: string;
  isButtonVisible?: boolean;
  isFirst?: boolean
}