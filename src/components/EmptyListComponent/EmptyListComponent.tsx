import { ReactNode, memo } from 'react';
import { Grid, Typography, Box, useTheme } from '@mui/material';
import { ButtonLink } from '@dfl/react-security';
import bgText from '../../assets/images/ilustrations/empty-list.svg';
import bg from '../../assets/images/ilustrations/empty-bg.svg';

export type EmptyListPageProps = {
  image?: ReactNode;
  title?: string;
  description?: string;
  textButton?: string;
  onClick?: () => void;
};

const EmptyListComponent = ({ image, title, description, textButton, onClick }: EmptyListPageProps) => {
  const theme = useTheme();
  const buttonStyles = {
    fontSize: '15px',
    bgcolor: theme.palette.primary.main,
    '& .hover': {
      bgcolor: theme.palette.primary.light,
    },
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgText})`,
        backgroundPosition: 'top-left',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        spacing={5}
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '17px 41px',
          pt: '220px',
          pb: '110px',
        }}
      >
        <Grid item textAlign={'center'} md={4}>
          {image && <Box>{image}</Box>}
        </Grid>
        <Grid item textAlign={'center'} md={4} sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
          {title && (
            <Typography variant='h4' sx={{ fontWeight: '600', fontSize: '38px', opacity: 1 }}>
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant='body2' sx={{ fontSize: '18px', opacity: 1 }}>
              {description}
            </Typography>
          )}
        </Grid>

        <Grid item textAlign={'center'} md={4}>
          {textButton && (
            <ButtonLink variant='contained' to={'/'} sx={buttonStyles}>
              {textButton}
            </ButtonLink>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(EmptyListComponent);
