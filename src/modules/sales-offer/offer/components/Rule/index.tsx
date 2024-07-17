import { FC, memo } from 'react';
import { Box, BoxProps, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import InfoIcon from '@mui/icons-material/Info';
import { FlexBox } from '@dfl/mui-react-common';

type Props = BoxProps & {
  description?: string;
};

const titleSx = {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: '4px',
};

const Rule: FC<Props> = ({
  description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
  ...props
}: Props) => {
  const { t } = useTranslation('offer');

  return (
    <Box {...props}>
      <Typography sx={titleSx}>{t('rule')}</Typography>
      <FlexBox alignItems={'center'} gap={1}>
        <InfoIcon />
        {description}
      </FlexBox>
    </Box>
  );
};

export default memo(Rule);
