import { memo } from 'react';
import { CircularProgress, DialogContent, styled, Typography } from '@mui/material';
import { FlexBox, HandlerError } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

type ExportingStateProps = {
  error: any;
};

export const Loading = styled('div')(() => ({
  position: 'relative',
  marginBottom: 20,
  '.export-icon': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontSize: '80px',
    marginLeft: '-40px',
    marginTop: '-40px',
  },
}));

const ExportingState = ({ error }: ExportingStateProps) => {
  const { t } = useTranslation('common');
  return (
    <DialogContent sx={{ padding: '20px 40px' }}>
      <FlexBox flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={2}>
        <Loading>
          <FileDownloadOutlinedIcon color={error ? 'error' : 'primary'} className={'export-icon'} />
          <CircularProgress
            size={109}
            color={error ? 'error' : 'primary'}
            value={100}
            variant={error ? 'determinate' : 'indeterminate'}
          />
        </Loading>
        <HandlerError error={error} />
        <Typography variant={'h2'} mb={1}>
          {t(!error ? 'exportDialog.exporting' : 'export')}
        </Typography>
        <Typography mb={4} maxWidth={400} textAlign={'center'}>
          {t('exportDialog.exportingTime')}
        </Typography>
      </FlexBox>
    </DialogContent>
  );
};

export default memo(ExportingState);
