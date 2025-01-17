import { Divider, Typography } from '@mui/material'
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next'

type Props = {
  icon: ReactNode,
  title: string,
  subtitle: string,
}
const StepsHeader = ({ icon, title, subtitle }: Props) => {
  const { t } = useTranslation('account');

  return (
    <>
      <div className='flex p-[20px_27px_18px_27px] gap-2'>
        {icon}
        <div>
          <Typography sx={{ color: '#2B3445', fontSize: '20px', fontWeight: 700 }}>
            {t(title)}
          </Typography>
          <Typography sx={{ color: '#2B3445' }}>
            {t(subtitle)}
          </Typography>
        </div>
      </div>
      <Divider sx={{ color: '#D7E1EA' }} />
    </>
  );
};

export default StepsHeader;
