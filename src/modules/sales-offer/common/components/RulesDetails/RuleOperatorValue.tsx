import { Typography } from '@mui/material';
import RuleLayout from './RuleLayout';
import { IRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { useTranslation } from 'react-i18next';
import { HeaderTypography, StackContainer, StackContent } from './styled';

type Props = {
  rule: Array<Omit<IRuleOffer, 'value'> & { value: number }>;
  title: string;
};

const RuleOperatorValue = ({ rule, title }: Props) => {
  const { t } = useTranslation('offerOrder');

  if (rule?.length === 0) return null;

  return (
    <RuleLayout title={t(title)}>
      {rule?.map((rule) => (
        <StackContainer key={rule.operator} flexDirection={'row'} gap={1}>
          <HeaderTypography color={'white'}>{t('details.operator')}</HeaderTypography>
          <StackContent sx={{ justifyContent: 'center', padding: 1 }}>
            <Typography>
              {t(`operator.${rule.operator}`)} {`$${rule?.value}`}
            </Typography>
          </StackContent>
        </StackContainer>
      ))}
    </RuleLayout>
  );
};

export default RuleOperatorValue;
