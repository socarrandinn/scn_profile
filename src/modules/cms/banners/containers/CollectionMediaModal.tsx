import { memo, useCallback } from 'react';
import { DialogContent } from '@mui/material';
import { DialogForm } from '@dfl/mui-react-common';
import { ICollection } from 'modules/cms/collections/interfaces';
import { useTranslation } from 'react-i18next';
import BannerMediaTabs from '../components/BannerMediaTabs/BannerMediaTabs';

type CollectionMediaModalProps = {
  open: boolean;
  loadingInitData?: boolean;
  title?: string;
  dataError?: any;
  initValue?: ICollection;
  onClose: () => void;
};
const CollectionMediaModal = ({ title = 'create', open, onClose }: CollectionMediaModalProps) => {
  const { t } = useTranslation('banner');

  const handleClose = useCallback(
    (event: any, reason?: 'backdropClick' | 'escapeKeyDown') => {
      if (reason !== 'backdropClick') {
        onClose?.();
      }
    },
    [onClose],
  );

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      title={t(title)}
      aria-labelledby={'collections-media-title'}
      maxWidth={'xl'}
    >
      <DialogContent>
        <BannerMediaTabs onClose={handleClose} />
      </DialogContent>
    </DialogForm>
  );
};

export default memo(CollectionMediaModal);
