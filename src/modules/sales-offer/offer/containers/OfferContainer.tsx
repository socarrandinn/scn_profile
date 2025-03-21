import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Stack, styled } from '@mui/material';
import { FormCheckBoxField, HandlerError } from '@dfl/mui-react-common';
import { IExtendOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
import useOfferCreateForm from 'modules/sales-offer/offer/hooks/useOfferCreateForm';
import CenterPageLayout1000 from 'modules/sales-offer/offer/layouts/CenterPageLayout1000';
import OfferTitle from 'modules/sales-offer/offer/components/OfferTitle';
import OfferEditForm from 'modules/sales-offer/offer/components/OfferForm/OfferEditForm';
import { PanelSection } from 'modules/sales-offer/offer/components/PanelSection';
import { OfferFormGeneralData } from 'modules/sales-offer/offer/components/OfferFormGeneralData';
import { OfferDescriptionForm } from 'modules/sales-offer/offer/components/OfferDescriptionForm';
import Rule from 'modules/sales-offer/offer/components/Rule';

import OfferClientRulesContainer from '../../common/containers/OfferClientRulesContainer';
import OfferCommonRulesContainer from '../../common/containers/OfferCommonRulesContainer';
import { useNavigate } from 'react-router';
import OfferTypeSection from '../components/OfferTypeSection/OfferTypeSection';
import OfferFormActions from '../components/OfferFormAction/OfferFormActions';

export const SectionName = styled(Paper)(({ theme }) => ({
  padding: 16,
  [theme.breakpoints.down('md')]: {
    padding: 8,
  },
  marginBottom: 16,
}));
type OfferContainerProps = {
  offer?: IExtendOffer;
};
const OfferContainer = ({ offer }: OfferContainerProps) => {
  const { t } = useTranslation('offerOrder');

  const {
    control,
    isLoading,
    error,
    onSubmit,
    sections,
    watch,
    setError,
    setValue,
    resetField,
    errors,
    state,
    municipality,
    clearErrors,
    discountValueType,
    handleDiscountValueType,
  } = useOfferCreateForm(offer);

  const someRule = Object.values(sections)?.some(Boolean);
  const type = watch('type');
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <CenterPageLayout1000>
      <OfferTitle title={t(`offerOrder:types:${(type as string) || 'offer'}`)} />
      <OfferEditForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} setValue={setValue}>
        {/* section name */}
        <PanelSection
          title={t('generalData')}
          titleMb={3}
          actions={<FormCheckBoxField name='always' label={t('multipleOffer')} />}
        >
          <Stack gap={3}>
            <OfferFormGeneralData />
          </Stack>
        </PanelSection>

        {/* section type */}
        <OfferTypeSection {...{ control, errors, type }} {...{ discountValueType, handleDiscountValueType }} />

        {/* section description */}
        <PanelSection title={t('offerOrder:sections:description:title')} titleMb={3}>
          <OfferDescriptionForm />
        </PanelSection>

        <Rule description={t('regulation')} mb={3} />

        {/* common rules */}
        <OfferCommonRulesContainer
          sections={sections}
          {...{ setError, resetField, clearErrors, watch, control, errors, setValue, state, municipality }}
        />

        {/* client rules */}
        <OfferClientRulesContainer
          sections={sections}
          {...{ setError, resetField, clearErrors, watch, control, errors }}
        />

        <HandlerError error={error} />

        {/* actions */}
        <OfferFormActions handleClose={handleClose} isLoading={isLoading} disabled={!someRule} />
      </OfferEditForm>
    </CenterPageLayout1000>
  );
};

export default memo(OfferContainer);
