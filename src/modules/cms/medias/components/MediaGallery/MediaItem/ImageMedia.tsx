import { LongText } from '@dfl/mui-react-common';
import { ImageNotSupportedOutlined } from '@mui/icons-material';
import { Avatar, Box } from '@mui/material';
import React, { memo } from 'react';
type Props = {
  image: string;
  Action: React.ReactNode;
  name: string;
};

const ImageMedia = ({ Action, image, name }: Props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        ':hover .overlay, :active .overlay, :focus-within .overlay': {
          opacity: 1,
        },
        ':hover .actions, :active .actions, :focus-within .actions': {
          display: 'flex',
        },
      }}
    >
      {Action}
      <Avatar
        variant='rounded'
        sx={(theme) => ({
          height: 156,
          borderRadius: '10px',
          width: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
          backgroundColor: theme.palette.background.default,
        })}
        src={image}
      >
        <ImageNotSupportedOutlined />
      </Avatar>

      {/* Overlay */}
      <Box
        className='overlay'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#101D304D', // Color oscuro transparente
          borderRadius: '10px',
          opacity: 0, // Oculto por defecto
          transition: 'opacity 0.3s ease', // Transición suave al hacer hover
          pointerEvents: 'none', // No interfiere con clics u otros eventos
          display: 'flex',
          alignItems: 'end',
          overflow: 'hidden',
        }}
      >
        <LongText
          sx={{
            m: 1,
            color: 'white',
            overflow: 'hidden',
            wordBreak: 'break-word',
          }}
          lineClamp={2}
          text={name ?? ''}
        />
      </Box>
    </Box>
  );
};

export default memo(ImageMedia);
