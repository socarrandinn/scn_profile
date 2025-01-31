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
  field: any;
  view: 'desktop' | 'mobile';
};
const RadioButtonCardItem = ({ field, option, view }: Props) => {
  const bannerUrl = () => {
    if (view === 'desktop') {
      return imageUrl(option?.banner?.desktopImage?.thumb ?? '');
    }
    return imageUrl(option?.banner?.mobileImage?.thumb ?? '');
  };

  return (
    <Card
      key={option?.value}
      variant='outlined'
      sx={{
        ...option.sx,
        border: `4px solid ${field.value === option.value ? '#3AE200' : 'default'}`,
        borderRadius: '10px',
        backgroundColor: '#EDEEF0',
        filter: field.value === option.value ? 'drop-shadow(0px 0px 5px #3AE20040)' : 'none',
      }}
    >
      <FormControlLabel
        value={option.value}
        control={<Radio sx={{ display: 'none' }} />}
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          margin: 0,
          p: 1,
        }}
        label={
          <Stack
            sx={{
              backgroundImage: `url(${bannerUrl()})`,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              /*  backgroundColor: (theme) => `${theme.palette.background.default}75`,
              borderRadius: '10px',
              p: 1, */
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
        }
      />
    </Card>
  );
};

export default RadioButtonCardItem;
