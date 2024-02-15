import { Stack, Typography, Chip, styled } from '@mui/material';
import { memo } from 'react';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import { IRejectFile } from './MultiFileUploadField/MultiFileUploadField';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useTranslation } from 'react-i18next';

type RejectionFileProps = {
  file: IRejectFile;
  disabled?: boolean;
  error?: boolean;
};

export const ChipError = styled(Chip)(() => ({
  borderRadius: 4,
}));

export const ImageItemContainer = styled(Stack)<{ error: boolean }>(({ theme, error }) => ({
  border: error ? `1px solid ${theme.palette.error.main}` : `1px solid ${theme.palette.divider}`,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  gap: 12,
  borderRadius: 5,
  width: '100%',
  height: 35,
  padding: 10,
}));

const RejectionFile = ({ file, error = false, disabled }: RejectionFileProps) => {
  const { t } = useTranslation('product');

  return (
    <>
      <ImageItemContainer error={error}>
        <Stack flexDirection={'row'} gap={1}>
          <DocumentScannerOutlinedIcon fontSize='small' />
          <Typography noWrap>{file?.file?.name}</Typography>
        </Stack>
        <Stack flexDirection={'row'} gap={1}>
          {file?.errors?.map((error) => (
            <ChipError
              key={error?.code}
              size='small'
              icon={<ErrorOutlineOutlinedIcon />}
              color='error'
              label={t(`product:storeStockModal:error:dropzone:${error.code}`)}
            />
          ))}
        </Stack>
      </ImageItemContainer>
    </>
  );
};

export default memo(RejectionFile);
