import { memo } from 'react'
import { Typography } from '@mui/material';
import { PaperTabView, } from 'modules/common/components/TabsWithSections/PaperTabView';
import { PaperTabViewProps } from 'modules/common/components/TabsWithSections/PaperTabView/PaperTabView';

type FormPaperProps = PaperTabViewProps & {
  title: string
}

const FormPaper = ({ title, children, ...props }: FormPaperProps) => {
  return (
        <PaperTabView {...props} >
            <Typography variant="subtitle2" gutterBottom mb={3}>
                {title}
            </Typography>
            {children}
        </PaperTabView>
  );
}

export default memo(FormPaper);
