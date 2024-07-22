import { IconButton, Tooltip, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

const AuditLogSnippet = ({ ip }: { ip: string }) => {
  const { t } = useTranslation('auditLog');
  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
    toast.success(t('copy-success', { ip }));
  };

  return (
    <Typography>
      {ip}
      <Tooltip title={t('copy-to-ip')}>
        <IconButton size='small' sx={{ ml: 1 }} onClick={handleCopy}>
          <ContentCopyIcon fontSize='inherit' />
        </IconButton>
      </Tooltip>
    </Typography>
  );
};

export default AuditLogSnippet;
