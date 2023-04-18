import { Grid } from '@mui/material'
import { memo } from 'react'
import { ReactLink } from '@dfl/react-security';
import { Content, ContentIcon, ContentText, SubTitle, Title } from './styled';
import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';

const SettingMenuItem = (props: IMenuItemPage) => {
  const { title, path, description, icon } = props

  return (
        <Grid item xs={12} md={4} className="truncate">
            <ReactLink to={path} underline={'none'}>
                <Content>
                    <ContentIcon variant='rounded'>
                        {icon}
                    </ContentIcon>
                    <ContentText className="truncate" justifyContent={'space-between'}>
                        <Title>{title}</Title>
                        {!!description && <SubTitle className="truncate">{description}</SubTitle>}
                    </ContentText>
                </Content>
            </ReactLink>
        </Grid>
  )
}

export default memo(SettingMenuItem);
