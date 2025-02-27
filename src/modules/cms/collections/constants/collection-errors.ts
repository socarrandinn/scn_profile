// The selected position is already occupied by another collection

export const ERRORS = {
  POSITION_IS_ALREADY_OCCUPIED: 'CPD001',
  COLLECTION_CHANGE_TO_DYNAMIC: 'CP00002',
};

export const COLLECTION_ERRORS = {
  [ERRORS.POSITION_IS_ALREADY_OCCUPIED]: {
    description: 'errors:collection.POSITION_IS_ALREADY_OCCUPIED',
  },
  [ERRORS.COLLECTION_CHANGE_TO_DYNAMIC]: {
    description: 'errors:collection.COLLECTION_CHANGE_TO_DYNAMIC',
  },
};
