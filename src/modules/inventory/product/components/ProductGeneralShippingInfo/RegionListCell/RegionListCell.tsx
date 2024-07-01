import {
  findMunicipalityByStateAndMunicipality,
  findProvinceByStateCode,
  COUNTRY_ISO_CODE_OPTIONS,
} from '@dfl/location';
import { Chip, Stack } from '@mui/material';
import { IRegion } from 'modules/inventory/product/interfaces/IProductCreate';
import { memo, useMemo } from 'react';
type RegionListCellProps = {
  regions: IRegion[] | undefined;
};

const RegionListCell = ({ regions }: RegionListCellProps) => {
  if (regions?.length === 0) return <></>;
  return (
    <Stack flexDirection={'row'} gap={1} flexWrap={'wrap'}>
      {regions?.map((region) => (
        <RegionItem key={region?.country} region={region} />
      ))}
    </Stack>
  );
};

export default memo(RegionListCell);

const RegionItem = ({ region }: { region: IRegion }) => {
  const label = useMemo(() => {
    const province = findProvinceByStateCode(region?.state);
    const municipality = findMunicipalityByStateAndMunicipality(region?.state, region?.city);
    const country = COUNTRY_ISO_CODE_OPTIONS?.find((c) => c.value === region?.country);
    return `${municipality?.name ? municipality?.name + ', ' : ''} ${province?.name || ''}, ${country?.name || 'Cuba'}`;
  }, [region]);

  return <Chip variant='outlined' label={label} />;
};
