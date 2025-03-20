import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from './logoSvg.svg';

export const LogoContainer = styled('div')(() => ({
  display: 'flex',
  marginBottom: 15,
  marginTop: 2,
  paddingLeft: 33,
  svg: {
    width: '59%',
    height: 64,
  },
}));

export const LogoSidebar = () => {
  return (
    <LogoContainer>
      <Logo />
    </LogoContainer>
  );
};
