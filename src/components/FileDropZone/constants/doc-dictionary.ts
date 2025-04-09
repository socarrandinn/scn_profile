import { ReactComponent as ImgIcon } from 'components/libs/Icons/doc-types-icon/img.svg';
import { ReactComponent as CsvIcon } from 'components/libs/Icons/doc-types-icon/csv.svg';
import { ReactComponent as PdfIcon } from 'components/libs/Icons/doc-types-icon/pdf.svg';
import { ReactComponent as PptIcon } from 'components/libs/Icons/doc-types-icon/ppt.svg';
import { ReactComponent as DocxIcon } from 'components/libs/Icons/doc-types-icon/docx.svg';
import { ReactComponent as DocIcon } from 'components/libs/Icons/doc-types-icon/doc.svg';
import { ReactComponent as JpgIcon } from 'components/libs/Icons/doc-types-icon/jpg.svg';
import { ReactComponent as TxtIcon } from 'components/libs/Icons/doc-types-icon/txt.svg';
import { ReactComponent as XlsIcon } from 'components/libs/Icons/doc-types-icon/xls.svg';
import { ReactComponent as XlsxIcon } from 'components/libs/Icons/doc-types-icon/xlsx.svg';

export const DOCUMENTS_DICTIONARY: Record<string, any> = {
  docx: DocxIcon,
  doc: DocIcon,
  pdf: PdfIcon,
  png: ImgIcon,
  jpg: JpgIcon,
  webp: ImgIcon,
  ppt: PptIcon,
  csv: CsvIcon,
  xls: XlsIcon,
  txt: TxtIcon,
  xlsx: XlsxIcon,
};
