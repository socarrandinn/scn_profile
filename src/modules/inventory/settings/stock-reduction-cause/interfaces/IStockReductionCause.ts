export interface IStockReductionCause {
  _id?: string;
  name: string;
  description: string;
  createdAt?: Date;
  active?: boolean;
  requiresResponsible: boolean;
  requiresEvidence: boolean;
}
