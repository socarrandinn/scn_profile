import { useCallback } from 'react';
import { Checkbox, Stack } from '@mui/material';
import { IBanner } from '../../interfaces';
import useSelectBannerContext from '../../context/useSelectBannerContext';

type Props = {
  banner: IBanner;
};
const BannerAction = ({ banner }: Props) => {
  const { toggleElement, elements } = useSelectBannerContext();

  const isChecked = elements.includes(banner?._id as string);

  const handleChange = useCallback(() => {
    toggleElement(banner?._id as string);
  }, [banner?._id, toggleElement]);

  return (
    <Stack
      className='actions'
      sx={{
        position: 'absolute',
        top: '4px',
        left: 0,
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        borderRadius: 1,
        pt: 1,
        px: 1.5,
        ...(isChecked
          ? { display: 'flex' }
          : {
              display: 'none',
            }),
      }}
    >
      <Checkbox
        checked={isChecked}
        onChange={handleChange}
        sx={{
          padding: 0,
          '& .MuiSvgIcon-root': {
            fill: '#E2E4E7',
            fillWidth: 2,
          },
          '&.Mui-checked .MuiSvgIcon-root': {
            fill: (theme) => theme.palette.primary.main,
          },
        }}
      />
    </Stack>
  );
};

export default BannerAction;
