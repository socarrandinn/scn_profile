import { memo } from 'react';
import empty from '../../../../../assets/images/collection/collection-banner-empty.webp';
import { Avatar, Button, Stack, Typography } from '@mui/material';
import { Add, Image } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { COLLECTION_BANNER_TYPE } from '../../constants/collection-types';
const subtitle = {
  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: 'emptyCollection.subtitleMultiBanner',
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: 'emptyCollection.subtitleSimpleBanner',
  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: 'emptyCollection.subtitleSideBySideBanner',
};

const CollectionEmpty = ({ bannerType }: { bannerType: COLLECTION_BANNER_TYPE }) => {
  const { t } = useTranslation('collection');
  const _subtitle = subtitle[bannerType];
  return (
    <Stack
      sx={{
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Avatar
        variant='square'
        sx={{
          width: '229px',
          height: '162px',
        }}
        src={empty}
      >
        <Image />
      </Avatar>
      <Typography textAlign={'center'} fontWeight={700} lineHeight={1.2} fontSize={'24px'}>
        {t('emptyCollection.title')}
      </Typography>
      <Typography textAlign={'center'} fontSize={'14px'}>
        {t(_subtitle)}
      </Typography>

      <Button fullWidth variant='contained' startIcon={<Add />}>
        {t('emptyCollection.addBanner')}
      </Button>
    </Stack>
  );
};

export default memo(CollectionEmpty);
