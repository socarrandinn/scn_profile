import { Avatar, Button, Card, Typography } from '@mui/material';
import NoImage from 'assets/images/no-image.jpg';
import { useTranslation } from 'react-i18next';

type Props = {
  onClick?: () => void;
};

const ProductNoImage = ({ onClick }: Props) => {
  const { t } = useTranslation('product');

  return (
    <>
      <Typography fontWeight={500}>{t('section.media.message')}</Typography>
      <Typography sx={{ marginBottom: 1 }}>{t('section.media.description')}</Typography>
      <Card style={{ maxWidth: 160, borderRadius: 6 }}>
        <Avatar
          sx={{ height: '155px', width: '155px' }}
          alt={'No image'}
          src={NoImage}
        />
      </Card>
      <Button variant='contained' onClick={onClick} sx={{ mt: 1 }}>{t('media:tabs.upload')}</Button>
    </>
  )
};

export default ProductNoImage;
