import { FlexBox } from '@dfl/mui-react-common';
import { getAddress } from '@dfl/location';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';
import { LongText } from 'components/libs/LongText';
import { IAddress } from 'modules/common/interfaces';

export const AddressValue = ({
  value,
  showStreet = false,
  showCountry = false,
  lineClamp = 0,
  maxCharacters = 0,
}: {
  value: IAddress;
  showStreet?: boolean;
  showCountry?: boolean;
  lineClamp?: number;
  maxCharacters?: number;
}) => {
  if (!value?.state) {
    return (
      <FlexBox alignItems={'center'}>
        <em className='w-full'>-{'\''}</em>
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
