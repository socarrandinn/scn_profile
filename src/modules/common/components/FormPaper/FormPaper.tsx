import { memo } from 'react'
import { Typography } from '@mui/material';
import { PaperTabView, } from 'modules/common/components/TabsWithSections/PaperTabView';
import { PaperTabViewProps } from 'modules/common/components/TabsWithSections/PaperTabView/PaperTabView';
import { FlexBox } from '@dfl/mui-react-common';

type FormPaperProps = PaperTabViewProps & {
  title: string;
  actions?: any
}

const FormPaper = ({ title, children, actions, ...props }: FormPaperProps) => {
  return (
        <PaperTabView {...props} >
            <FlexBox sx={{ gap: 1, marginBottom: 3 }} alignItems="center">
                <Typography variant="subtitle2">
                    {title}
                </Typography>
                {actions}
            </FlexBox>

            {children}
        </PaperTabView>
  );
}

export default memo(FormPaper);
