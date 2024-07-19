import { Box } from '@mui/material';

type HeaderDecoratorProps = {
  icon: any;
  color: string;
};

const HeaderDecorator = ({ icon: Icon, color }: HeaderDecoratorProps) => {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }} zIndex={1} color={'white'} paddingTop={1} marginRight={-0.7}>
        <Icon sx={{ fontSize: 50 }} />
      </Box>
      <Box
        position={'absolute'}
        bgcolor={color}
        borderRadius={'100%'}
        width={376}
        height={376}
        top={-135}
        right={-270}
        sx={{ display: { xs: 'none', md: 'block' } }}
      />
      <Box
        position={'absolute'}
        bgcolor={color}
        borderRadius={'100%'}
        width={406}
        height={406}
        top={-157}
        right={-275}
        sx={{ opacity: '30%', display: { xs: 'none', md: 'block' } }}
      />
    </>
  );
};

export default HeaderDecorator;
