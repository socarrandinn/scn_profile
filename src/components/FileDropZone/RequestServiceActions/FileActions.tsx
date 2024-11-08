import { memo, useCallback } from 'react';
import { AbsoluteActions, Actions } from '../styled';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { TYPE_DROP } from '../FileDropZone';
import { useTranslation } from 'react-i18next';
import DeleteIcon from 'modules/inventory/product-stock/components/Icons/DeleteIcon';

type FileActionsProps = {
  isDelete?: boolean;
  isDownload?: boolean;
  remove: any;
  index: number;
  link: string;
  type: TYPE_DROP;
};

const FileActions = ({ isDelete = true, isDownload = false, remove, index, link, type }: FileActionsProps) => {
  const { t } = useTranslation('dropZone');
  const handleDelete = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  const onDownloadFile = useCallback((url: string) => {
    const link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const actions = (
    <>
      {isDelete && (
        <Tooltip title={t('deleteFile')}>
          <IconButton
            color='error'
            size='small'
            onClick={() => {
              handleDelete(index);
            }}
          >
            <DeleteIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      )}
      {isDownload && (
        <Tooltip title={t('dropFile')}>
          <IconButton
            color='secondary'
            size='small'
            onClick={() => {
              onDownloadFile(link);
            }}
          >
            <FileDownloadOutlinedIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      )}
    </>
  );

  if (type === TYPE_DROP.FILE) return <Actions>{actions}</Actions>;

  return <AbsoluteActions>{actions}</AbsoluteActions>;
};

export default memo(FileActions);
