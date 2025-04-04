import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { usePageDetails } from '../../context/PageDetailsContext';
import { FormPaper } from 'modules/common/components/FormPaper';
import { ConditionContainer, DateValue, DetailStack, SkeletonForm } from '@dfl/mui-react-common';
import { DATES_SUMMARY } from 'modules/common/constants/dates-summary';


const PageDates = () => {
  const { t } = useTranslation('page');
  const { isLoading, page } = usePageDetails();

  return (
    <FormPaper title={t('offerOrder:sections.interval')} variant={{ title: 'h4' }}>
      <ConditionContainer active={!isLoading} alternative={<SkeletonForm numberItemsToShow={2} />}>
        <DetailStack
          details={DATES_SUMMARY}
          data={page}
          sx={{ px: 0 }}
        />
      </ConditionContainer>
    </FormPaper>
  );
};

export default memo(PageDates);
