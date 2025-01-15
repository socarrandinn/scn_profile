import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
type Props = {
  title: string;
  subtitle?: string;
  position?: string;
};
const BannerFormPaperTitle = ({ title, subtitle, position }: Props) => {
  return (
    <Stack>
      <Stack flexDirection={'row'} gap={1}>
        <Typography variant='subtitle2'>{title ?? 'Banner Agro'}</Typography>
        {position && <Typography variant='subtitle2' sx={{ color: 'primary.main' }}>{position}</Typography>}
      </Stack>
      <Typography variant='caption'>
        {subtitle ?? 'Inserte el banner en el espacio indicado. Asegúrese de seguir las medidas recomendadas.'}
      </Typography>
    </Stack>
  );
};

export default memo(BannerFormPaperTitle);
