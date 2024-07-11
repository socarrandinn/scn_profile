import { memo, useMemo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { useReviewsReportDetailContext } from '../../contexts/ReviewsReportDetail';
import { REVIEW } from '../../constants/reviews-entities.style';
import { Box } from '@mui/material';
import { ButtonLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { ADMIN_REVIEW_ENTITY_ENUM } from '../../interfaces';

const ReviewHeaderDetails = () => {
  const { review } = useReviewsReportDetailContext();

  return (
    <HeaderSummaryTabs
      title={review?.entityData?.name || ''}
      subtitle={review?.entityData?.code || ''}
      logo={review?.entityData?.media?.[0]}
      actions={<Actions entity={review?.entity as string} type={review?.type as ADMIN_REVIEW_ENTITY_ENUM} />}
      entityStyle={REVIEW}
    />
  );
};

export default memo(ReviewHeaderDetails);

type ActionsProps = {
  entity: string;
  type: ADMIN_REVIEW_ENTITY_ENUM;
};

export const Actions = ({ entity, type }: ActionsProps) => {
  const { t } = useTranslation('reviews');

  const route = useMemo(() => {
    switch (type) {
      case ADMIN_REVIEW_ENTITY_ENUM.PRODUCT:
        return `/inventory/products/${entity}/general`;

      default:
        return '';
    }
  }, [entity, type]);

  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <ButtonLink variant='outlined' to={route}>
        {t('entity.toProduct')}
      </ButtonLink>
    </Box>
  );
};
