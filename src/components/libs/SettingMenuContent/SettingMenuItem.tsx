import { Box, Grid } from '@mui/material';
import { memo } from 'react';
import { ReactLink } from '@dfl/react-security';
import { Content, ContentText, SubTitle, Title } from './styled';
import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { useTranslation } from 'react-i18next';
import BackgroundDecoration from './BackgroundDecoration';

const SettingMenuItem = (props: IMenuItemPage & { translation: string }) => {
  const { title, path, description, icon: Icon, translation, color } = props;
  const { t } = useTranslation(translation);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <ReactLink to={path} underline={'none'}>
        <Content ringColor={color}>
          <BackgroundDecoration color={color} />
          <Box sx={{ zIndex: 1, marginTop: '21px', marginRight: 6, color: 'white' }}>
            <Icon fontSize='large' />
          </Box>
          <ContentText justifyContent={'flex-start'}>
            <Title>{title}</Title>
            {!!description && <SubTitle>{t(description)}</SubTitle>}
          </ContentText>
        </Content>
      </ReactLink>
    </Grid>
  );
};

export default memo(SettingMenuItem);
