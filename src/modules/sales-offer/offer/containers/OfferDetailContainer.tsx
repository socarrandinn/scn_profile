import SaleOfferHeaderDetail from 'modules/sales-offer/common/components/SaleOfferHeaderDetail';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { FormPaper } from 'modules/common/components/FormPaper';
import { Box, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import OfferOrderReportContainer from 'modules/reports/containers/offers/OfferOrderReportContainer';
import { useOfferContext } from '../contexts/OfferContext';
import { useMemo } from 'react';
import { getOfferOrderStatus } from '../components/OfferStatus/OfferStatus';
import { OFFER_STATUS } from 'modules/sales-offer/common/constants/offer.enum';
import SaleOfferInactive from 'modules/sales-offer/common/components/SaleOfferInactive';
import { ChildrenProps, PageLoader } from '@dfl/mui-react-common';
import RuleContent from 'modules/sales-offer/common/components/RulesDetails/RuleContent';
import SaleOfferSummaryDetail from 'modules/sales-offer/common/components/SaleOfferSummaryDetail';

type Props = {
  onEdit?: VoidFunction;
};
const OfferDetailContainer = ({ onEdit }: Props) => {
  const { t } = useTranslation('common');
  const { offer, isLoading } = useOfferContext();
  const status = useMemo(() => getOfferOrderStatus(offer.fromDate, offer.toDate), [offer.fromDate, offer.toDate]);

  const showEdit = useMemo(() => status !== OFFER_STATUS.FINISHED, [status]); // todo

  const detailSummary = useMemo(
    () => (
      <DetailSummary ghost width={{ md: 320, lg: 400, xl: 450 }}>
        <SaleOfferSummaryDetail showEdit={showEdit} />
        <FormPaper
          title={t('report:report.offer.offerRule.title')}
          actions={
            showEdit && (
              <Button startIcon={<Edit />} size='small' variant='outlined' onClick={onEdit}>
                {t('edit')}
              </Button>
            )
          }
        >
          <RuleContent />
        </FormPaper>
      </DetailSummary>
    ),
    [showEdit, t, onEdit],
  );

  if (isLoading) {
    return (
      <FormPaper>
        <PageLoader />
      </FormPaper>
    );
  }

  if (status === OFFER_STATUS.SCHEDULED) {
    return (
      <ContentLayout>
        <DetailLayout>
          <DetailContent ghost>
            <FormPaper title={t('report:statistic')} variant={{ title: 'h1' }}>
              <SaleOfferInactive />
            </FormPaper>
          </DetailContent>
          {detailSummary}
        </DetailLayout>
      </ContentLayout>
    );
  }

  return (
    <ContentLayout>
      <DetailLayout>
        <DetailContent ghost>
          <FormPaper title={t('report:statistic')} variant={{ title: 'h1' }}>
            <OfferOrderReportContainer />
          </FormPaper>
        </DetailContent>
        {detailSummary}
      </DetailLayout>
    </ContentLayout>
  );
};

export default OfferDetailContainer;

const ContentLayout = ({ children }: ChildrenProps) => {
  return (
    <Box mb={3}>
      <SaleOfferHeaderDetail />
      {children}
    </Box>
  );
};
