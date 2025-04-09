import { Upload } from '@mui/icons-material';
import { Button, Card, CardMedia, Typography } from '@mui/material';
import NoImage from 'assets/images/no-image.jpg';
import { useTranslation } from 'react-i18next';

type Props = {
  onClick?: () => void;
};

const ProductNoImage = ({ onClick }: Props) => {
  const { t } = useTranslation('product');

  return (
    <div className='flex gap-5'>
      <Card style={{ maxWidth: 120, borderRadius: 6 }}>
        <CardMedia sx={{ height: '120px', width: '120px', backgroundSize: 'contain' }} image={NoImage} />
      </Card>
      <div className='flex flex-col justify-between'>
        <div>
          <Typography fontWeight={500}>{t('section.media.message')}</Typography>
          <Typography sx={{ marginBottom: 1 }}>{t('section.media.description')}</Typography>
        </div>
        <Button variant='contained' onClick={onClick} startIcon={<Upload />} sx={{ maxWidth: '150px', mb: 1 }}>
          {t('media:tabs.upload')}
        </Button>
      </div>
    </div>
  )
};

export default ProductNoImage;
