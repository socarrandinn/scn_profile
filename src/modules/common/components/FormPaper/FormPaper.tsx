import { memo } from 'react';
import { Tooltip, Typography } from '@mui/material';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { PaperTabViewProps } from 'modules/common/components/TabsWithSections/PaperTabView/PaperTabView';
import { FlexBox } from '@dfl/mui-react-common';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export type FormPaperProps = PaperTabViewProps & {
  title?: string;
  helpText?: string;
  actions?: any;
  mbHeader?: string | number;
};

const FormPaper = ({ title, children, actions, mbHeader, helpText, ...props }: FormPaperProps) => {
  const hasHeader = !!title || !!actions;
  return (
    <PaperTabView {...props}>
      {hasHeader && (
        <FlexBox sx={{ gap: 1, marginBottom: mbHeader || 3 }} alignItems='center'>
          {!!title && <Typography variant='subtitle2'>{title}</Typography>}
          {!!helpText && (
            <Tooltip title={helpText} placement='right'>
              <HelpOutlineOutlinedIcon fontSize='small' />
            </Tooltip>
          )}
          {actions}
        </FlexBox>
      )}

      {children}
    </PaperTabView>
  );
};

export default memo(FormPaper);
