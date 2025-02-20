import SaleOfferHeaderDetail from 'modules/sales-offer/common/SaleOfferHeaderDetail';
import { IExtendOffer } from '../interfaces/IExtendOffer';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { FormPaper } from 'modules/common/components/FormPaper';
import { Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import OfferOrderReportContainer from 'modules/reports/containers/offers/OfferOrderReportContainer';

type Props = {
  offer?: IExtendOffer;
  onEdit?: VoidFunction;
};
const OfferDetailContainer = ({ offer, onEdit }: Props) => {
  const { t } = useTranslation('common');
  return (
    <>
      <SaleOfferHeaderDetail />

      <DetailLayout>
        <DetailContent ghost>
          <OfferOrderReportContainer />
        </DetailContent>
        <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }}>
          <FormPaper
            title={t('report:report.offer.offerRule.title')}
            actions={
              <Button startIcon={<Edit />} size='small' variant='outlined' onClick={onEdit}>
                {t('edit')}
              </Button>
            }
          />
        </DetailSummary>
      </DetailLayout>
    </>
  );
};

export default OfferDetailContainer;
