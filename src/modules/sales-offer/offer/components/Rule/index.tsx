import { FC, memo, useMemo } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import InfoIcon from '@mui/icons-material/Info';
import { FlexBox } from '@dfl/mui-react-common';

type Props = {
  description?: string;
  isPaper?: boolean;
  mb: number;
};

const titleSx = {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: '4px',
};

const Rule: FC<Props> = ({ description = 'Lorem ipsum dolor', isPaper = false, mb = 3 }: Props) => {
  const { t } = useTranslation('offerOrder');

  const content = useMemo(
    () => (
      <>
        <Typography sx={titleSx}>{t('rule')}</Typography>
        <FlexBox alignItems={'center'} gap={1}>
          <InfoIcon color='primary' />
          {description}
        </FlexBox>
      </>
    ),
    [description, t],
  );

  if (isPaper) return <Paper sx={{ marginBottom: mb, padding: { xs: 1, md: 2 } }}>{content}</Paper>;

  return <Box sx={{ marginBottom: mb }}>{content}</Box>;
};

export default memo(Rule);
