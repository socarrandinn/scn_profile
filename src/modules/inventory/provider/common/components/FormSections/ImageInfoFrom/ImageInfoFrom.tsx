import { Grid } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FormUploadImage } from 'modules/common/components/MediaUploader/FormUploadImage';

const ImageInfoFrom = ({ children }: ChildrenProps) => {
  const { t } = useTranslation('provider');
  return (
    <FormPaper nm title={t('section.image.title')}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <FormUploadImage name={'avatar'} />
        </Grid>
        {children}
      </Grid>
    </FormPaper>
  );
};

export default memo(ImageInfoFrom);
