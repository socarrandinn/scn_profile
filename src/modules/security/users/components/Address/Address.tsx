import { Address } from 'interfaces/address';
import { FlexBox, LongText } from '@dfl/mui-react-common';
import { getAddress } from '@dfl/location';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';

export const AddressValue = ({
  value,
  showStreet = false,
  showCountry = false,
  lineClamp = 0,
  maxCharacters = 0,
}: {
  value: Address;
  showStreet?: boolean;
  showCountry?: boolean;
  lineClamp?: number;
  maxCharacters?: number;
}) => {
  if (!value?.state) {
    return (
      <FlexBox alignItems={'center'}>
        <em className='w-full'>-{"'"}</em>
      </FlexBox>
    );
  }

  const location = getAddress(value, { showStreet, showCountry });

  return (
    <FlexBox alignItems={'center'}>
      <PlaceOutlined fontSize={'small'} />
      <em className='w-full'>
        <LongText lineClamp={lineClamp} maxCharacters={maxCharacters} text={location} />
      </em>
    </FlexBox>
  );
};
