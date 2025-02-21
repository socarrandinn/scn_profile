import { Chip, Stack, Typography } from '@mui/material';
import RuleLayout from './RuleLayout';
import { IRuleOffer, IValueProductRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { useTranslation } from 'react-i18next';
import { HeaderTypography, StackContainer, StackContent, StackSection } from './styled';

type Props = {
  rule: Omit<IRuleOffer, 'value'> & { value: IValueProductRuleOffer[] };
  title: string;
};

const RuleCategory = ({ rule, title }: Props) => {
  const { t } = useTranslation('offerOrder');

  if (!rule) return null;

  return (
    <RuleLayout title={t(title)}>
      <StackContainer flexDirection={'column'}>
        <StackSection flexDirection={'row'}>
          <HeaderTypography width={'100%'} color={'white'}>
            {t('details.operator')}
          </HeaderTypography>
          <HeaderTypography width={'100%'} color={'white'}>
            {t('details.category')}
          </HeaderTypography>
        </StackSection>
        <StackSection flexDirection={'column'}>
          <StackContent gap={1}>
            {rule?.value?.map((prod) => (
              <Stack flexDirection={'row'} key={prod.operator} alignItems={'center'}>
                <Typography width={'100%'}>
                  {t(`operator.${prod.operator}`)} {`$${prod?.quantity}`}
                </Typography>
                <Chip size='small' label={prod?.product} />
              </Stack>
            ))}
          </StackContent>
        </StackSection>
      </StackContainer>
    </RuleLayout>
  );
};

export default RuleCategory;
