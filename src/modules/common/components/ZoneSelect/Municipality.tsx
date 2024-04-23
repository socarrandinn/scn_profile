import { FlexBox } from '@dfl/mui-react-common';
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

  return (
    <FlexBox alignItems={'center'}>
      {value.city && <PlaceOutlined fontSize={'small'} />}
      <em className='w-full'>{value.city}</em>
    </FlexBox>
  );
};
