import Rule from '../Rule';
import { useTranslation } from 'react-i18next';
import OfferCommonRulesContainer from 'modules/sales-offer/common/containers/OfferCommonRulesContainer';
import OfferClientRulesContainer from 'modules/sales-offer/common/containers/OfferClientRulesContainer';
import { IClientOffer, ICommonOffer, IRuleSection } from '../../interfaces/IExtendOffer';
import useOfferRuleEditForm from '../../hooks/useOfferRuleEditForm';
import OfferEditForm from '../OfferForm/OfferEditForm';
import { Stack } from '@mui/material';
import { useOfferContext } from '../../contexts/OfferContext';
import { useCallback } from 'react';
import OfferFormActions from '../OfferFormAction/OfferFormActions';

type Props = {
  offer: IClientOffer & ICommonOffer;
  onClose: () => void;
};

const OfferRuleForm = ({ offer, onClose }: Props) => {
  const { t } = useTranslation('offerOrder');
  const { isCoupon } = useOfferContext();
  const { onOneClose } = useOfferContext();
  const handleClose = useCallback(() => onOneClose?.('form_rules'), [onOneClose]);
  const {
    error,
    control,
    isLoading,
    onSubmit,
    setValue,
    sections,
    resetField,
    clearErrors,
    watch,
    errors,
    state,
    municipality,
    setError,
  } = useOfferRuleEditForm({ defaultValues: offer, onClose, isCoupon });

  const someRule = Object.values(sections ?? {})?.some(Boolean);
  return (
    <Stack mt={2}>
      <OfferEditForm
        error={error}
        isLoading={isLoading}
        control={control}
        onSubmit={onSubmit}
        setValue={setValue}
        formId='offer-rules-form'
      >
        <Rule description={t('regulation')} mb={2} isPaper />

        {/* common rules */}
        <OfferCommonRulesContainer
          sections={sections as IRuleSection}
          {...{ setError, resetField, clearErrors, watch, control, errors, setValue, state, municipality }}
        />

        {/* client rules */}
        <OfferClientRulesContainer
          sections={sections as IRuleSection}
          {...{ setError, resetField, clearErrors, watch, control, errors }}
        />

        {/* actions */}
        <OfferFormActions
          handleClose={handleClose}
          isLoading={isLoading}
          disabled={!someRule}
          form='offer-rules-form'
        />
      </OfferEditForm>
    </Stack>
  );
};

export default OfferRuleForm;
