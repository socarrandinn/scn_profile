import { Card, FormControlLabel, Radio, Stack, StackProps } from '@mui/material';
import { imageUrl } from '@dfl/mui-react-common';
import ImageIcon from 'components/libs/Icons/ImageIcon';
import { TransTypography } from 'components/TransTypography';
import { IBanner } from 'modules/cms/banners/interfaces';
import { useMemo } from 'react';

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
  check?: string | null;
  onCheck?: VoidFunction;
  disabled?: boolean;
};
const RadioButtonCardItem = ({ option, view, check, onCheck, disabled = false }: Props) => {
  const bannerUrl = () => {
    if (view === 'desktop') {
      return imageUrl(option?.banner?.desktopImage?.url ?? '');
    }
    return imageUrl(option?.banner?.mobileImage?.url ?? '');
  };

  const isEqual = useMemo(() => (check ? check === option?.value : false), [check, option?.value]);

  return (
    <Card
      key={option?.value}
      variant='outlined'
      sx={{
        ...option.sx,
        border: isEqual ? '4px solid #3AE200' : 'none',
        borderRadius: '10px',
        backgroundColor: '#EDEEF0',
        filter: isEqual ? 'drop-shadow(0px 0px 5px #3AE20040)' : 'none',
        backgroundImage: `url(${bannerUrl()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      <FormControlLabel
        value={option?.value}
        control={<Radio sx={{ display: 'none' }} />}
        onClick={onCheck}
        disabled={disabled}
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
