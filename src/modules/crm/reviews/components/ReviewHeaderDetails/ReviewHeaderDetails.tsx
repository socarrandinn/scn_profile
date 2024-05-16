import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useReviewsReportDetailContext } from '../../contexts/ReviewsReportDetail';
import { REVIEW } from '../../constants/reviews-entities.style';
import { Box } from '@mui/material';
import { ButtonLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';

const ReviewHeaderDetails = () => {
  const { entity, entityError, isEntityLoading } = useReviewsReportDetailContext();
  if (isEntityLoading || entityError) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={entity?.name || ''}
      subtitle={entity?.code || ''}
      logo={entity?.media?.[0]}
      actions={<Actions entity={entity} />}
      entityStyle={REVIEW}
    />
  );
};

export default memo(ReviewHeaderDetails);

type ActionsProps = {
  entity: any;
};

export const Actions = ({ entity }: ActionsProps) => {
  const { t } = useTranslation('reviews');
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <ButtonLink variant='outlined' to={`/inventory/products/${entity?._id as string}/general`}>{t('entity.toProduct')}</ButtonLink>
    </Box>
  );
};
