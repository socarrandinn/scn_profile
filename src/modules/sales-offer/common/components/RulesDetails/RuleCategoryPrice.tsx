import { Typography } from '@mui/material';
import RuleLayout from './RuleLayout';
import { IRuleAmountCategory } from 'modules/sales-offer/offer/interfaces';
import { useTranslation } from 'react-i18next';
import { HeaderTypography, StackContainer, StackContent, StackSection } from './styled';

type Props = {
  rule: IRuleAmountCategory;
  title: string;
  items: Array<{ _id: string; name: string }>;
};

const RuleCategoryPrice = ({ rule, title, items }: Props) => {
  const { t } = useTranslation('offerOrder');

  /* const getName = (_id: string) => {
    return items?.find((c) => c?._id === _id)?.name || _id;
  }; */

  if (!rule) return null;

  return (
    <RuleLayout title={t(title)}>
      <StackContainer flexDirection={'row'}>
        <StackSection flexDirection={'column'}>
          <HeaderTypography color={'white'}>{t('details.operator')}</HeaderTypography>
          <StackContent>
            <Typography>
              {t(`operator.${rule.operator}`)}
              {/*   <Box component={'span'} fontWeight={600}>{` $${rule?.amount as number}`}</Box> */}
            </Typography>
          </StackContent>
        </StackSection>
        <StackSection flexDirection={'column'}>
          <HeaderTypography color={'white'}>{t('details.category')}</HeaderTypography>
          {/*  <StackContent flexDirection={'row'} gap={1} flexWrap={'wrap'}>
            {rule?.value?.category?.map((cat) => (
              <Chip size='small' key={cat} label={getName(cat)} />
            ))}
          </StackContent> */}
        </StackSection>
      </StackContainer>
    </RuleLayout>
  );
};

export default RuleCategoryPrice;
