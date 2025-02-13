import { Card, FormControlLabel, Radio, Stack, StackProps } from '@mui/material';
import { imageUrl } from '@dfl/mui-react-common';
import ImageIcon from 'components/libs/Icons/ImageIcon';
import { TransTypography } from 'components/TransTypography';
import { IBanner } from 'modules/cms/banners/interfaces';

type BannerType = Pick<IBanner, 'desktopImage' | 'mobileImage'>;

export interface IOption {
  iconSize?: string;
  imageSize: string;
  label: string;
  value: string;
  sx: StackProps['sx'];
  banner?: BannerType;
}

type Props = {
  option: IOption;

  view: 'desktop' | 'mobile';
};
const RadioButtonCardItem = ({ option, view }: Props) => {
  const bannerUrl = () => {
    if (view === 'desktop') {
      return imageUrl(option?.banner?.desktopImage?.url ?? '');
    }
    return imageUrl(option?.banner?.mobileImage?.url ?? '');
  };

  return (
    <Card
      key={option?.value}
      variant='outlined'
      sx={{
        ...option.sx,
        border: '4px solid default',
        borderRadius: '10px',
        backgroundColor: '#EDEEF0',
        filter: 'none', // field?.value === option?.value ? 'drop-shadow(0px 0px 5px #3AE20040)' : 'none',
        backgroundImage: `url(${bannerUrl()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <FormControlLabel
        value={option?.value}
        control={<Radio sx={{ display: 'none' }} />}
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          margin: 0,
          p: 1,
        }}
        label={
          !option?.banner && (
            <Stack
              sx={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ImageIcon sx={{ fontSize: option?.iconSize ?? '50px' }} />
              <TransTypography
                textAlign={'center'}
                variant='body2'
                message={option?.label}
                values={{ imageSize: option?.imageSize }}
              />
            </Stack>
          )
        }
      />
    </Card>
  );
};

export default RadioButtonCardItem;
