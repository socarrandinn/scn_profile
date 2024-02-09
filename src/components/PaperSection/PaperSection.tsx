import { memo } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { PaperTabViewProps } from 'modules/common/components/TabsWithSections/PaperTabView/PaperTabView';

export type PaperSectionProps = PaperTabViewProps & {
  title?: string;
  subtitle?: string;
  helpText?: string;
  actions?: any;
  mbHeader?: string | number;
  onDivider?: boolean;
};

const PaperSection = ({
  title,
  subtitle,
  children,
  actions,
  mbHeader,
  helpText,
  onDivider,
  ...props
}: PaperSectionProps) => {
  const hasHeader = !!title || !!subtitle || !!actions;
  return (
    <PaperTabView {...props}>
      {hasHeader && (
        <Stack
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'start', md: 'center' }}
          justifyContent={'space-between'}
        >
          <Stack>
            {!!title && <Typography variant='h1'>{title}</Typography>}
            {!!subtitle && <Typography>{subtitle}</Typography>}
          </Stack>
          {actions}
        </Stack>
      )}
      {onDivider && <Divider sx={{ my: 1 }} flexItem />}
      {children}
    </PaperTabView>
  );
};

export default memo(PaperSection);
