import { Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

type Props = {
  value: string;
};
const OperatorCell = ({ value }: Props) => {
  const { t } = useTranslation('offerOrder');
  if (!value) return <></>;

  return <Typography>{t(`offerOrder:operator:${value}`)}</Typography>;
};

export default OperatorCell;
