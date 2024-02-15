import { Box, Stack, Typography, styled } from '@mui/material';
import { memo } from 'react';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';

type AcceptedFileProps = {
  file: File;
  disabled?: boolean;
  error?: boolean;
};

export const StyledBox = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ImageItemContainer = styled(Stack)<{ error: boolean }>(({ theme, error }) => ({
  border: error ? `1px solid ${theme.palette.error.main}` : `1px solid ${theme.palette.divider}`,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: 12,
  borderRadius: 5,
  width: '100%',
  height: 35,
  padding: 10,
}));

const AcceptedFile = ({ file, error = false, disabled }: AcceptedFileProps) => {
  return (
    <>
      <ImageItemContainer error={error}>
        <DocumentScannerOutlinedIcon />
        <Typography noWrap>{file.name}</Typography>
      </ImageItemContainer>
    </>
  );
};

export default memo(AcceptedFile);
