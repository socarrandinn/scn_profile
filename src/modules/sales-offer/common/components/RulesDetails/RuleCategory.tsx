import { Box, Chip, Stack, Typography } from '@mui/material';
import RuleLayout from './RuleLayout';
import { IRuleOffer, IValueProductRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { useTranslation } from 'react-i18next';
import { HeaderTypography, StackContainer, StackContent, StackSection } from './styled';

type Props = {
  rule: Omit<IRuleOffer, 'value'> & { value: IValueProductRuleOffer[] };
  title: string;
  items: Array<{ _id: string; name: string }>;
  itemTitle?: 'category' | 'product';
};

const RuleCategory = ({ rule, title, items, itemTitle = 'category' }: Props) => {
  const { t } = useTranslation('offerOrder');

  const getName = (_id: string) => {
    return items?.find((c) => c?._id === _id)?.name || _id;
  };

  if (!rule) return null;

  return (
    <RuleLayout title={t(title)}>
      <StackContainer flexDirection={'column'}>
        <StackSection flexDirection={'row'}>
          <HeaderTypography width={'100%'} color={'white'}>
            {t('details.operator')}
          </HeaderTypography>
          <HeaderTypography width={'100%'} color={'white'}>
            {t(`details.${itemTitle}`)}
          </HeaderTypography>
        </StackSection>
        <StackSection flexDirection={'column'}>
          <StackContent gap={1}>
            {rule?.value?.map((prod) => (
              <Stack flexDirection={'row'} key={prod.operator} alignItems={'center'}>
                <Typography width={'100%'}>
                  {t(`operator.${prod.operator}`)}
                  <Box component={'span'} fontWeight={600}>{` ${prod?.quantity}`}</Box>
                </Typography>
                <Chip size='small' label={getName(prod?.product)} />
              </Stack>
            ))}
          </StackContent>
        </StackSection>
      </StackContainer>
    </RuleLayout>
  );
};

export default RuleCategory;
