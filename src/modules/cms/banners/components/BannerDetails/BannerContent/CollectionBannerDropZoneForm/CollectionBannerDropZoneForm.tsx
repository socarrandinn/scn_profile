import { FormPaper } from 'modules/common/components/FormPaper';
import { memo, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import BannerToggle from './BannerToggle';

const CollectionBannerDropZoneForm = () => {
  const [view, setView] = useState<'desktop' | 'module'>('desktop');
  const onChange = (e: any) => {
    if (e.target.value !== null) {
      const value = e.target.value;
      setView(value);
    }
  };

  return (
    <FormPaper
      nm
      title={
        <Stack>
          <Typography variant='subtitle2'>Banner Agro</Typography>
          <Typography variant='caption'>
            Inserte el banner en el espacio indicado. Asegúrese de seguir las medidas recomendadas.
          </Typography>
        </Stack>
      }
      actions={<BannerToggle view={view} onChange={onChange} />}
    >
      ddd
    </FormPaper>
  );
};

export default memo(CollectionBannerDropZoneForm);
