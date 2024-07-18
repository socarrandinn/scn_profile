import { Chip, ChipProps, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

const CouponSnippet = ({ code, ...props }: { code: string } & ChipProps) => {
  const { t } = useTranslation('couponOrder');
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success(t('copy-success', { code }));
  };

  return (
    <Chip
      {...props}
      size='small'
      variant='outlined'
      label={code}
      onDelete={handleCopy}
      deleteIcon={
        <Tooltip title={t('copy-to-clipboard')}>
          <ContentCopyIcon />
        </Tooltip>
      }
    />
  );
};

export default CouponSnippet;
