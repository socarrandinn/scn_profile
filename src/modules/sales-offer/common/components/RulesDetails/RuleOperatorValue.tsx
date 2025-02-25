import { Box, Typography } from '@mui/material';
import RuleLayout from './RuleLayout';
import { IRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { useTranslation } from 'react-i18next';
import { HeaderTypography, StackContainer, StackContent } from './styled';
import { useCallback } from 'react';
import { NumberValue } from '@dfl/mui-react-common';

type Props = {
  rule: Array<Omit<IRuleOffer, 'value'> & { value: number }>;
  title: string;
  isCurrency?: boolean;
};

const RuleOperatorValue = ({ rule, title, isCurrency = false }: Props) => {
  const { t } = useTranslation('offerOrder');

  const getValue = useCallback(
    (value: number) => {
      if (isCurrency) {
        return (
          <Box component={'span'} sx={{ fontWeight: 600 }}>
            {`$${value}`}
          </Box>
        );
      }

      return <NumberValue component={'span'} value={value} sx={{ fontWeight: 600 }} />;
    },
    [isCurrency],
  );

  if (rule?.length === 0) return null;

  return (
    <RuleLayout title={t(title)}>
      {rule?.map((rule) => (
        <StackContainer key={rule.operator} flexDirection={'row'} gap={1}>
          <HeaderTypography color={'white'}>{t('details.operator')}</HeaderTypography>
          <StackContent sx={{ justifyContent: 'center', padding: 1 }}>
            <Typography>
              {t(`operator.${rule.operator}`)} {getValue(rule?.value)}
            </Typography>
          </StackContent>
        </StackContainer>
      ))}
    </RuleLayout>
  );
};

export default RuleOperatorValue;
