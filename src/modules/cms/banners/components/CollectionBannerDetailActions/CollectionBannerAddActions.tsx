import { useToggle } from '@dfl/hook-utils';
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import CollectionsAddElementModal from 'modules/cms/collections/containers/CollectionsAddElementModal';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const CollectionBannerAddAction = () => {
  const { t } = useTranslation('collection');
  const { collection } = useCollectionDetails();
  const { isOpen, onClose, onOpen } = useToggle(false);
  return (
    <div>
      <Button onClick={onOpen} startIcon={<Add />} variant='contained'>
        {t('elements.bannerAdd')}
      </Button>
      <CollectionsAddElementModal
        onClose={onClose}
        open={isOpen}
        title={'elements.bannerAdd'}
        initValue={{
          collectionId: collection?._id as string,
          elements: collection?.elements ?? [],
        }}
      />
    </div>
  );
};

export default memo(CollectionBannerAddAction);
