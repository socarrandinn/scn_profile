import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import OfferOrderReportContainer from 'modules/reports/containers/offers/OfferOrderReportContainer';
import { useOfferContext } from '../contexts/OfferContext';
import { useCallback, useMemo } from 'react';
import { getOfferOrderStatus } from '../components/OfferStatus/OfferStatus';
import { OFFER_STATUS } from 'modules/sales-offer/common/constants/offer.enum';
import SaleOfferInactive from 'modules/sales-offer/common/components/SaleOfferInactive';
import { PageLoader } from '@dfl/mui-react-common';
import RuleContent from 'modules/sales-offer/common/components/RulesDetails/RuleContent';
import SaleOfferSummaryDetail from 'modules/sales-offer/common/components/SaleOfferSummaryDetail';
import SaleOfferCouponCode from 'modules/sales-offer/common/components/SaleOfferCouponCode';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';

const OfferDetailContainer = () => {
  const { t } = useTranslation('common');
  const { offer, isLoading, onOneToggle, onOneClose, state } = useOfferContext();
  const status = useMemo(() => getOfferOrderStatus(offer?.fromDate, offer?.toDate), [offer?.fromDate, offer?.toDate]);
  const showEdit = useMemo(() => status !== OFFER_STATUS.FINISHED, [status]); // todo

  // status edit
  const open = useMemo(() => state?.form_rules || false, [state]);
  const handleRuleToggle = useCallback(() => onOneToggle?.('form_rules'), [onOneToggle]);
  const handleGeneralClose = useCallback(() => onOneClose?.('form_general'), [onOneClose]);

  const detailSummary = useMemo(
    () => (
      <DetailSummary ghost width={{ md: 350, lg: 420, xl: 450 }}>
        {offer?.code && <SaleOfferCouponCode />}
        <SaleOfferSummaryDetail showEdit={showEdit} />
        <FormPaper
          title={t('report:report.offer.offerRule.title')}
          actions={
            <FormPaperAction
              onToggle={() => {
                handleRuleToggle();
                handleGeneralClose();
              }}
              open={open}
              disabled={!showEdit}
            />
          }
        >
          <RuleContent />
        </FormPaper>
      </DetailSummary>
    ),
    [offer?.code, showEdit, t, open, handleRuleToggle, handleGeneralClose],
  );

  if (isLoading) {
    return (
      <FormPaper>
        <PageLoader size={'page'} />
      </FormPaper>
    );
  }

  if (status === OFFER_STATUS.SCHEDULED) {
    return (
      <DetailLayout>
        <DetailContent ghost>
          <SaleOfferInactive />
        </DetailContent>
        {detailSummary}
      </DetailLayout>
    );
  }

  return (
    <DetailLayout>
      <DetailContent ghost>
        <OfferOrderReportContainer />
      </DetailContent>
      {detailSummary}
    </DetailLayout>
  );
};

export default OfferDetailContainer;
