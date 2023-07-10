import { styled } from '@mui/material/styles';

export const Logo = () => {
  return (
        <svg id="eCommerce-2" xmlns="http://www.w3.org/2000/svg" width="341.293" height="118.36"
             viewBox="0 0 341.293 118.36">
            <g id="Dofleini_logo" data-name="Dofleini logo" transform="translate(0 32.397)">
                <g id="Group_2" data-name="Group 2">
                    <path id="Path_9" data-name="Path 9"
                          d="M1.6,87.163V1.2H45.322c12.193,0,20.642,2.526,25.606,7.577q7.316,7.577,7.316,26.651V52.76q0,19.074-7.316,26.651T45.322,86.989H1.6ZM24.593,68H41.751c5.313,0,8.71-.958,10.364-2.787,1.655-1.916,2.439-6.532,2.439-13.848V37.17c0-7.316-.871-12.019-2.526-13.935s-5.139-2.874-10.364-2.874H24.593Z"
                          transform="translate(-1.6 -1.2)" fill="#553089"/>
                    <path id="Path_11" data-name="Path 11" d="M284.2,87.163V1.2h23.254V67.131h38.5V87.163Z"
                          transform="translate(-123.249 -1.2)" fill="#553089"/>
                    <path id="Path_13" data-name="Path 13" d="M203.5,42.3V92.467h22.993V61.2h32.748V42.3Z"
                          transform="translate(-112.835 -6.504)" fill="#553089"/>
                    <path id="Path_14" data-name="Path 14" d="M203.5,1.2V20.361h57.744V1.2Z"
                          transform="translate(-112.835 -1.2)" fill="#553089"/>
                </g>
            </g>
            <text id="ecommerce" transform="translate(210.293 68)" fill="#a4328a" fontSize="69"
                  fontFamily="Square721BT-Roman, Square721 BT">
                <tspan x="0" y="0">suite</tspan>
            </text>
        </svg>

  );
}

export const LogoContainer = styled('div')(() => ({
  display: 'flex',
  marginBottom: 20,
  paddingLeft: 33,
  svg: {
    width: '59%',
    height: 64
  }
}));
export const LogoSidebar = () => {
  return (
        <LogoContainer>
            <Logo/>
        </LogoContainer>
  );
}
