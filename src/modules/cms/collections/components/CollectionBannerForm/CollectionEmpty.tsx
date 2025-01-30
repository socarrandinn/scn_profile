import { Fragment, memo, useMemo } from 'react';
import empty from '../../../../../assets/images/collection/collection-banner-empty.webp';
import { Avatar, Stack, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { COLLECTION_BANNER_TYPE, COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import CollectionAddElementButton from '../CollectionHeaderDetails/CollectionAddElementButton';
import { isEmpty } from 'lodash';

const subtitle = {
  [COLLECTION_BANNER_TYPE.MULTI_BANNER]: 'emptyCollection.subtitleMultiBanner',
  [COLLECTION_BANNER_TYPE.SIMPLE_BANNER]: 'emptyCollection.subtitleSimpleBanner',
  [COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER]: 'emptyCollection.subtitleSideBySideBanner',
};

type Props = {
  elements: string[];
  bannerType: COLLECTION_BANNER_TYPE;
};
const CollectionEmpty = ({ bannerType, elements }: Props) => {
  const { t } = useTranslation('collection');
  const _subtitle = subtitle[bannerType];

  const emptyComponent = useMemo(() => {
    if (isEmpty(elements)) {
      return (
        <Fragment>
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
        </Fragment>
      );
    }
  }, [_subtitle, elements, t]);

  return (
    <Fragment>
      <Stack
        sx={{
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
        }}
      >
        {emptyComponent}
        <CollectionAddElementButton contentType={COLLECTION_CONTENT_TYPE.BANNER} buttonProps={{ fullWidth: true }} />
      </Stack>
    </Fragment>
  );
};

export default memo(CollectionEmpty);
