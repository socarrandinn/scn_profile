import { memo, ReactNode } from 'react';
import { Paper, Typography, styled, Stack } from '@mui/material';
import { ChildrenProps, FormSwitchField } from '@dfl/mui-react-common';

export const SectionPaper = styled(Paper)(({ theme }) => ({
  padding: 16,
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
};

const PanelEnableSection = ({
  title,
  subtitle,
  titleMb = 2,
  checked,
  switchName = 'name',
  switchLabel = '',
  children,
}: ChildrenProps & Props) => {
  return (
    <SectionPaper>
      <Stack sx={{ marginBottom: titleMb }}>
        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
          <FormSwitchField defaultChecked={checked} name={switchName} label={switchLabel} />
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
    </SectionPaper>
  );
};

export default memo(PanelEnableSection);
