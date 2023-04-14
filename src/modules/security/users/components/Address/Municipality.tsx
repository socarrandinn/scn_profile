import { Address } from 'interfaces/address';
import { FlexBox } from '@dfl/mui-react-common';
import { findMunicipalityByStateAndMunicipality, ILocationMunicipality } from '@dfl/location';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';

export const MunicipalityValue = ({ value }: { value: Address }) => {
  if (!value?.municipality) {
    return (
      <FlexBox alignItems={'center'}>
        <em className='w-full'>-</em>
      </FlexBox>
    );
  }

  const location: ILocationMunicipality | undefined = findMunicipalityByStateAndMunicipality(
    value.state,
    value.municipality,
  );

  return (
    <FlexBox alignItems={'center'}>
      {location && <PlaceOutlined fontSize={'small'} />}
      <em className='w-full'>{location?.name}</em>
    </FlexBox>
  );
};
