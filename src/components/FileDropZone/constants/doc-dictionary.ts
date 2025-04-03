import DocxIcon from 'components/libs/Icons/doc-types-icon/DocxIcon';
import ImgIcon from 'components/libs/Icons/doc-types-icon/ImgIcon';
import PdfIcon from 'components/libs/Icons/doc-types-icon/PdfIcon';
import TxtIcon from 'components/libs/Icons/doc-types-icon/TxtIcon';
import UnknownDocIcon from 'components/libs/Icons/doc-types-icon/UnknownDocIcon';

export const DOCUMENTS_DICTIONARY: Record<string, any> = {
  undefined: UnknownDocIcon,
  document: DocxIcon,
  docx: DocxIcon,
  doc: DocxIcon,
  pdf: PdfIcon,
  png: ImgIcon,
  jpg: ImgIcon,
  webp: ImgIcon,
  txt: TxtIcon,
};
