import { FlexBox } from '@dfl/mui-react-common';
import { findMunicipalityByStateAndMunicipality, ILocationMunicipality } from '@dfl/location';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';
import { IAddress } from 'modules/common/interfaces';

export const MunicipalityValue = ({ value }: { value: IAddress }) => {
  if (!value?.city) {
    return (
      <FlexBox alignItems={'center'}>
        <em className='w-full'>-</em>
      </FlexBox>
    );
  }

  const location: ILocationMunicipality | undefined = findMunicipalityByStateAndMunicipality(
    value.state,
    value.city,
  );

  return (
    <FlexBox alignItems={'center'}>
      {location && <PlaceOutlined fontSize={'small'} />}
      <em className='w-full'>{location?.name}</em>
    </FlexBox>
  );
};
