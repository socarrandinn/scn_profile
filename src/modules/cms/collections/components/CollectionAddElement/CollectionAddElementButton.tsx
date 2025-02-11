import { memo } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { Add } from '@mui/icons-material';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import CollectionsAddElementModal from '../../containers/CollectionsAddElementModal';
import { useCollectionDetails } from '../../context/CollectionContext';

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
  buttonProps?: ButtonProps;
};
const CollectionAddElementButton = ({ contentType, buttonProps }: Props) => {
  const { t } = useTranslation('collection');
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { collectionId } = useCollectionDetails();

  return (
    <>
      <Button {...buttonProps} onClick={onOpen} startIcon={<Add />} variant='contained'>
        {t(`elements.${contentType}.title`)}
      </Button>

      <CollectionsAddElementModal
        onClose={onClose}
        open={isOpen}
        contentType={contentType}
        initValue={{ collectionId: collectionId as string, elements: [] }}
        title='addElement'
      />
    </>
  );
};

export default memo(CollectionAddElementButton);
