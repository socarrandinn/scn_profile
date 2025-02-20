import { useToggle } from '@dfl/hook-utils';
import { DropDown } from '@dfl/mui-react-common';
import { Paper, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CreateBannerMenuItem, SelectBannerMenuItem } from './CollectionMenuItem';
import { useCollectionDetails } from '../../context/CollectionContext';
import { BANNER_ELEMENT_OPERATION } from 'modules/cms/banners/interfaces';
import { bannerInitValue } from 'modules/cms/banners/constants/banner.initValue';
import BannerElementCreateModal from 'modules/cms/banners/containers/BannerElementCreateModal';

export const DropDownPaper = styled(Paper)(() => ({
  overflow: 'unset !important',
  position: 'relative',
  marginTop: 5,
}));

const menuProps = {
  PaperProps: {
    component: DropDownPaper,
  },
};

const CollectionAddElementDropDown = () => {
  const { t } = useTranslation('collection');
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { collectionId } = useCollectionDetails();
  const create = useToggle(false);
  return (
    <>
      <DropDown
        variant={'contained'}
        label={t('elements.BANNER.addBanner')}
        open={isOpen}
        menuProps={menuProps}
        onOpen={onOpen}
        sx={{
          '.MuiButton-root': {
            width: '100%',
          },
        }}
        onClose={onClose}
      >
        <CreateBannerMenuItem onOpen={create.onOpen} />
        <SelectBannerMenuItem />
      </DropDown>

      <BannerElementCreateModal
        onClose={create.onClose}
        open={create.isOpen}
        collectionId={collectionId as string}
        initValue={{
          collection: collectionId as string,
          banner: bannerInitValue,
          operation: BANNER_ELEMENT_OPERATION.NEW_ELEMENT,
        }}
      />
    </>
  );
};

export default memo(CollectionAddElementDropDown);
