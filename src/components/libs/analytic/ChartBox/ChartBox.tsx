import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FormPaperProps } from 'modules/common/components/FormPaper/FormPaper';

type ChartBoxProps = FormPaperProps;
const common = { padding: { xs: 2, md: 3 } };
const ChartBox = (props: ChartBoxProps) => {
  return <FormPaper sx={common} firsts mbHeader={'0px'} {...props} />;
};

export default memo(ChartBox);
