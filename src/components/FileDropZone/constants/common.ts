export const ACCEPT_ONLY_EXCEL = {
  'application/vnd.ms-excel': ['.xls'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
};

export const ACCEPT_ONLY_IMAGES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/gif': ['.gif'],
  'image/webp': ['.webp'],
  // 'image/svg+xml': ['.svg'],
};

export const ACCEPT_ONLY_PDF = {
  'application/pdf': ['.pdf'],
};

export const MAX_SIZE_FILE = 5 * 1024 * 1024; // 5mb

export const ACCEPT_ALL = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'image/gif': ['.gif'],
  'image/webp': ['.webp'],
  'application/pdf': ['.pdf'],
};
