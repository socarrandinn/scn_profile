import { memo, useMemo } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCollectionDetails } from '../../context/CollectionContext';
import { useToggle } from '@dfl/hook-utils';
import { Add } from '@mui/icons-material';
import CollectionsAddElementModal from '../../containers/CollectionsAddElementModal';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
  buttonProps?: ButtonProps;
};
const CollectionAddElementButton = ({ contentType, buttonProps }: Props) => {
  const { t } = useTranslation('collection');
  const { collection } = useCollectionDetails();
  const { isOpen, onClose, onOpen } = useToggle(false);

  const payload = useMemo(() => ({ collectionId: collection?._id as string, elements: [] }), [collection?._id]);
  return (
    <>
      <Button {...buttonProps} onClick={onOpen} startIcon={<Add />} variant='contained'>
        {t(`elements.${contentType}.title`)}
      </Button>

      <CollectionsAddElementModal
        onClose={onClose}
        open={isOpen}
        title={`elements.${contentType}.title`}
        initValue={payload}
        contentType={contentType}
      />
    </>
  );
};

export default memo(CollectionAddElementButton);
