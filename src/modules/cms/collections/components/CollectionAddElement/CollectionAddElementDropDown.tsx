import { useToggle } from '@dfl/hook-utils';
import { DropDown } from '@dfl/mui-react-common';
import { Paper, styled } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CreateBannerMenuItem, SelectBannerMenuItem } from './CollectionMenuItem';

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
  return (
    <DropDown
      variant={'contained'}
      label={t('elements.BANNER.addBanner')}
      id={'product-discount-options'}
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
      <CreateBannerMenuItem />
      <SelectBannerMenuItem />
    </DropDown>
  );
};

export default memo(CollectionAddElementDropDown);
