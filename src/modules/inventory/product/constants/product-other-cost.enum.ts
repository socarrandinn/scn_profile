export enum OTHER_COST_OWNERSHIP_TYPE {
  LOGISTIC = 'LogisticProvider',
  SUPPLIER = 'SupplierProvider',
  MANUFACTURE = 'Manufacture',
}

export const OTHER_COST_OWNERSHIP_TYPE_VALUES = Object.values(OTHER_COST_OWNERSHIP_TYPE);

export const DEFAULT_OWNERSHIP_TYPES = [
  OTHER_COST_OWNERSHIP_TYPE.LOGISTIC,
  OTHER_COST_OWNERSHIP_TYPE.SUPPLIER,
  OTHER_COST_OWNERSHIP_TYPE.MANUFACTURE,
];

export const OWNERSHIP_TYPES_MAP = {
  [OTHER_COST_OWNERSHIP_TYPE.LOGISTIC]: 'logistics',
  [OTHER_COST_OWNERSHIP_TYPE.SUPPLIER]: 'suppliers',
  [OTHER_COST_OWNERSHIP_TYPE.MANUFACTURE]: 'manufactures',
};
