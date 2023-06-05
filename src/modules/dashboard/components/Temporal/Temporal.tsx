import { memo } from 'react'
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { ButtonLink } from '@dfl/react-security';

export const Component = styled('div')(() => ({
  padding: 70,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 500,
  minHeight: 500,
  '>div': {
    display: 'flex',
    gap: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e8e9eeb3',
    borderRadius: 6,
    textAlign: 'center',
    maxWidth: 500,
    width: '100%',
    height: 500,
  }
}));

const Temporal = () => {
  return (
        <div>
            <Component>
                <div>
                    <Typography variant={'h1'}>Esta página está en construcción</Typography>
                    <ButtonLink to={'/rrhh/employees/me/personal'} variant={'contained'}
                                color={'primary'}>
                        Ir a mi información
                    </ButtonLink>
                </div>
            </Component>
        </div>
  );
}

export default memo(Temporal);
