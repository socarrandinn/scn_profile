import { ToggleButtonGroup } from '@dfl/mui-react-common';
import { DesktopWindowsOutlined, SmartphoneOutlined } from '@mui/icons-material';
import { ToggleButton } from '@mui/material';
import { memo } from 'react';
type BannerToggleProps = {
  onChange: (e: any) => void;
  view: 'desktop' | 'mobile';
};

const BannerToggle = ({ onChange, view }: BannerToggleProps) => {
  return (
    <ToggleButtonGroup
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#EDEEF0',
        '& .MuiToggleButton-root': {
          border: 0,
          ':hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius: '5px',
            ':hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          },
        },
      })}
      orientation='horizontal'
      value={view}
      exclusive
      onChange={onChange}
      size='small'
    >
      <ToggleButton value='mobile' aria-label='mobile'>
        <SmartphoneOutlined />
      </ToggleButton>
      <ToggleButton value='desktop' aria-label='desktop'>
        <DesktopWindowsOutlined />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default memo(BannerToggle);
