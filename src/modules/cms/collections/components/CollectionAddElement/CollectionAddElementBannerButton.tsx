import { memo } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCollectionDetails } from '../../context/CollectionContext';
import { useToggle } from '@dfl/hook-utils';
import { Add } from '@mui/icons-material';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import BannerCreateModal from 'modules/cms/banners/containers/BannerCreateModal';

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
  buttonProps?: ButtonProps;
};
const CollectionAddElementBannerButton = ({ contentType, buttonProps }: Props) => {
  const { t } = useTranslation('collection');
  const { collectionId } = useCollectionDetails();
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <>
      <Button {...buttonProps} onClick={onOpen} startIcon={<Add />} variant='contained'>
        {t(`elements.${contentType}.title`)}
      </Button>

      <BannerCreateModal onClose={onClose} open={isOpen} collectionId={collectionId as string} />
    </>
  );
};

export default memo(CollectionAddElementBannerButton);
