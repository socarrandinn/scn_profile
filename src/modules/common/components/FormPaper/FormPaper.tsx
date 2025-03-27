import { memo, ReactNode } from 'react';
import { Stack, styled, Tooltip, Typography } from '@mui/material';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { PaperTabViewProps } from 'modules/common/components/TabsWithSections/PaperTabView/PaperTabView';
import { FlexBox } from '@dfl/mui-react-common';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export type FormPaperProps = PaperTabViewProps & {
  title?: string | ReactNode;
  subtitle?: string;
  helpText?: string;
  actions?: any;
  mbHeader?: string | number;
  variant?: {
    title: 'h1' | 'subtitle2' | 'h4';
  };
  icon?: ReactNode;
};

const FormPaper = ({
  title,
  children,
  actions,
  mbHeader,
  helpText,
  variant,
  icon,
  subtitle,
  ...props
}: FormPaperProps) => {
  const hasHeader = !!title || !!actions;
  return (
    <PaperTabView {...props}>
      {hasHeader && (
        <Stack sx={{ gap: 1, marginBottom: mbHeader || 3 }}>
          <FlexBox alignItems='center' justifyContent={actions ? 'space-between' : 'start'}>
            <Stack gap={0.5} alignItems={'center'} direction={'row'}>
              {!!icon && <IconContent>{icon}</IconContent>}
              {!!title && <Typography variant={variant?.title ?? 'subtitle1'}>{title}</Typography>}
              {!!helpText && (
                <Tooltip title={helpText} placement='right'>
                  <HelpOutlineOutlinedIcon fontSize='small' />
                </Tooltip>
              )}
            </Stack>
            {actions}
          </FlexBox>
          {!!subtitle && (
            <Typography fontWeight={300} variant={'subtitle2'}>
              {subtitle}
            </Typography>
          )}
        </Stack>
      )}

      {children}
    </PaperTabView>
  );
};

export default memo(FormPaper);

const IconContent = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: 4,
  borderRadius: 4,
}));
