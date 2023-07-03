import { Grid } from '@mui/material';
import { memo } from 'react';
import { ReactLink } from '@dfl/react-security';
import { Content, ContentIcon, ContentText, SubTitle, Title } from './styled';
import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { useTranslation } from 'react-i18next';

const SettingMenuItem = (props: IMenuItemPage & { translation: string }) => {
  const { title, path, description, icon, translation } = props;
  const { t } = useTranslation(translation);

  return (
    <Grid item xs={12} md={4}>
      <ReactLink to={path} underline={'none'}>
        <Content>
          <ContentIcon variant='rounded'>{icon}</ContentIcon>
          <ContentText justifyContent={'space-between'}>
            <Title>{title}</Title>
            {!!description && <SubTitle>{t(description)}</SubTitle>}
          </ContentText>
        </Content>
      </ReactLink>
    </Grid>
  );
};

export default memo(SettingMenuItem);
