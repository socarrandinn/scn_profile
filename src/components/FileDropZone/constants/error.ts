export enum PROJECT_ERROR {
  INVALID_FILE_EXT = 'EFEXT',
}

export const FILE_ERROR = {
  [PROJECT_ERROR.INVALID_FILE_EXT]: {
    title: 'dropZone:errors.invalidFileExtension.title',
    description: 'dropZone:errors.invalidFileExtension.subtitle',
  },
};
