import { Chip } from '@mui/material';
import RuleLayout from './RuleLayout';
import { useTranslation } from 'react-i18next';
import { HeaderTypography, StackContainer, StackContent, StackSection } from './styled';
import { OPERATOR_RULE_OFFER_TYPE, RULE_OFFER_FACT_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { useFindClientsByIds } from 'modules/crm/clients/hooks/useFindClients';
import { IClients } from 'modules/crm/clients/interfaces';
import { useMemo } from 'react';
import ItemListSkeleton from '../skeleton/ItemListSkeleton';

type Props = {
  rule: {
    fact: RULE_OFFER_FACT_TYPE.SPECIFIC_CLIENT_LIST;
    value: string[];
    operator: OPERATOR_RULE_OFFER_TYPE;
  };
  title: string;
};

const RuleSpecificClientList = ({ rule, title }: Props) => {
  const { t } = useTranslation('offerOrder');
  const { data, isLoading } = useFindClientsByIds(rule?.value);

  const ClientList = useMemo(
    () => data?.data?.map((client: IClients) => <Chip size='small' key={client?._id} label={client?.fullName} />),
    [data?.data],
  );

  if (!rule) return null;

  return (
    <RuleLayout title={t(title)}>
      <StackContainer flexDirection={'row'}>
        {/* <StackSection flexDirection={'column'}>
          <HeaderTypography color={'white'}>{t('details.operator')}</HeaderTypography>
          <StackContent>
            <Typography>{t(`operator.${rule.operator}`)}</Typography>
          </StackContent>
        </StackSection> */}
        <StackSection flexDirection={'column'}>
          <HeaderTypography color={'white'}>{t('details.clients')}</HeaderTypography>
          <StackContent flexDirection={'row'} gap={1} flexWrap={'wrap'}>
            {isLoading ? ItemListSkeleton : ClientList}
          </StackContent>
        </StackSection>
      </StackContainer>
    </RuleLayout>
  );
};

export default RuleSpecificClientList;
