import { Box, Chip, Stack, Typography } from '@mui/material';
import RuleLayout from './RuleLayout';
import { IRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { useTranslation } from 'react-i18next';
import { HeaderTypography, StackContainer, StackContent, StackSection } from './styled';
import { LongText } from '@dfl/mui-react-common';

interface IItem {
  operator: string;
  amount: number;
  quantity: number;
  product: string;
  category: string;
}
type Props = {
  rule: Omit<IRuleOffer, 'value'> & { value: IItem[] };
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
    <RuleLayout
      title={t(title)}
      subtitle={
        <Chip
          size='small'
          color='warning'
          variant='filled'
          sx={{ borderRadius: 1 }}
          label={t(`operator.${rule.operator}`)}
        />
      }
    >
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
            {rule?.value?.map((item) => (
              <Stack flexDirection={'row'} key={item.operator} alignItems={'center'}>
                <Typography width={'100%'}>
                  {t(`operator.${item.operator}`)}
                  <Box component={'span'} fontWeight={600}>{` ${item?.quantity ?? item?.amount}`}</Box>
                </Typography>
                <Chip
                  size='small'
                  label={<LongText maxCharacters={20} lineClamp={1} text={getName(item?.product || item?.category)} />}
                />
              </Stack>
            ))}
          </StackContent>
        </StackSection>
      </StackContainer>
    </RuleLayout>
  );
};

export default RuleCategory;
