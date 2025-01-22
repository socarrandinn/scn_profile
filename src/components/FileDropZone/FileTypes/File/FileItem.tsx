import { memo, useMemo } from 'react';
import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import { FileActions } from 'components/FileDropZone/RequestServiceActions';
import { TYPE_DROP } from 'components/FileDropZone/FileDropZone';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { ImageOutlined } from '@mui/icons-material';
import DocumentIcon from 'modules/inventory/product-stock/components/Icons/DocumentIcon';
import { formatSize } from 'utils/file-utils';
import { normalizeText } from 'utils/normalize-string';

type FileItemProps = {
  field: any;
  isDelete?: boolean;
  isDownload?: boolean;
  remove: any;
  index: number;
  type: TYPE_DROP;
  documentName?: string;
};

export const IconFile = styled(FileCopyIcon)(({ theme }) => ({
  borderRadius: 5,
  backgroundColor: theme.palette.primary.main,
  padding: 7,
  color: theme.palette.background.paper,
}));

export const IconImage = styled(ImageOutlined)(({ theme }) => ({
  borderRadius: 5,
  backgroundColor: theme.palette.info.main,
  padding: 7,
  color: theme.palette.background.paper,
}));

export const Content = styled(ListItem)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: 10,
  flexDirection: 'row',
  flexGrow: 1,
}));

const isImageMimeType = (mimeType: string) => {
  return mimeType?.includes('image');
};

const FileItem = ({ field, index, remove, isDelete, isDownload, type, documentName }: FileItemProps) => {
  const _size = useMemo(() => formatSize(field?.size), [field?.size]);

  const _name = useMemo(
    () => documentName || normalizeText(field?.originalname || field?.name) || field?.url || field?.thumb,
    [documentName, field?.originalname, field?.name, field?.thumb, field?.url],
  );

  return (
    <Content
      secondaryAction={
        <FileActions
          type={type}
          remove={remove}
          index={index}
          isDelete={isDelete}
          isDownload={isDownload}
          link={field?.url || field?.image}
        />
      }
    >
      <ListItemIcon sx={{ minWidth: 35 }}>
        {isImageMimeType(field?.mimetype) ? <IconImage /> : <DocumentIcon />}
      </ListItemIcon>
      <ListItemText primary={_name} />
      <ListItemText sx={{ marginLeft: 'auto', mr: 1 }} primary={_size} primaryTypographyProps={{ textAlign: 'end' }} />
    </Content>
  );
};

export default memo(FileItem);
