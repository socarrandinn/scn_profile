import { memo, ReactNode } from 'react';
import { Typography, styled, Stack } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import { FormCustomSwitchField } from 'modules/common/components/IphoneSwitchField';

export const Section = styled(Stack)(({ theme }) => ({
  padding: '8px 16px',
  marginBottom: 16,
  [theme.breakpoints.down('md')]: {
    padding: 8,
  },
}));

type Props = {
  title: ReactNode;
  subtitle: ReactNode;
  titleMb?: number;
  checked?: boolean;
  switchName?: string;
  switchLabel?: string;
  chip?: ReactNode;
};

const PanelEnableSection = ({
  title,
  subtitle,
  titleMb = 2,
  checked = false,
  switchName = 'name',
  switchLabel = '',
  children,
  chip,
}: ChildrenProps & Props) => {
  return (
    <Section>
      <Stack sx={{ marginBottom: titleMb }}>
        <Stack flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
          <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
            {chip}
            <FormCustomSwitchField bg='transparent' defaultChecked={checked} name={switchName} label={switchLabel} />
          </Stack>
        </Stack>
        <Typography
          sx={{
            fontSize: 12,
          }}
        >
          {subtitle}
        </Typography>
      </Stack>
      {children}
    </Section>
  );
};

export default memo(PanelEnableSection);
