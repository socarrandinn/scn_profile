import { Chip, Stack, Typography } from '@mui/material';
import RuleLayout from './RuleLayout';
import { IRuleOffer } from 'modules/sales-offer/offer/interfaces';
import { useTranslation } from 'react-i18next';
import { HeaderTypography, StackContainer, StackContent, StackSection } from './styled';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { useMemo } from 'react';

type ValueProps = {
  municipality: string;
  state: string;
};
type Props = {
  rule: Omit<IRuleOffer, 'value'> & { value: ValueProps[] };
  title: string;
};

const RuleAddress = ({ rule, title }: Props) => {
  const { t } = useTranslation('offerOrder');

  const groupedByState: Record<string, string[]> = rule?.value?.reduce<Record<string, string[]>>((acc, item) => {
    const { state, municipality } = item;
    if (!acc[state]) {
      acc[state] = [];
    }
    acc[state].push(municipality);
    return acc;
  }, {});

  if (!rule) return null;

  return (
    <RuleLayout title={t(title)}>
      <StackContainer flexDirection={'column'}>
        <StackSection flexDirection={'row'}>
          <HeaderTypography width={'100%'} color={'white'}>
            {t('common:province')}
          </HeaderTypography>
          <HeaderTypography width={'100%'} color={'white'}>
            {t('common:municipality')}
          </HeaderTypography>
        </StackSection>
        <StackSection flexDirection={'column'}>
          <StackContent gap={1}>
            {Object.keys(groupedByState).map((prov) => (
              <Stack flexDirection={'row'} key={prov} alignItems={'center'}>
                <Typography width={'100%'}>{findProvinceByStateCode?.(prov)?.name ?? prov}</Typography>
                <AllMunicipality municipalities={groupedByState?.[prov]} state={prov} />
              </Stack>
            ))}
          </StackContent>
        </StackSection>
      </StackContainer>
    </RuleLayout>
  );
};

export default RuleAddress;

const AllMunicipality = ({ municipalities, state }: { municipalities: string[]; state: string }) => {
  const { t } = useTranslation();
  const isAllMunicipality = useMemo(() => municipalities?.some((m) => m === null), [municipalities]);

  if (isAllMunicipality) return <Chip size='small' label={t('offerOrder:sections.address.allMunicipality')} />;
  return (
    <Stack flexDirection={'row'} gap={1} flexWrap={'wrap'} justifyContent={'end'}>
      {municipalities?.map((mun) => (
        <Chip size='small' key={mun} label={findMunicipalityByStateAndMunicipality?.(state, mun)?.name ?? mun} />
      ))}
    </Stack>
  );
};
