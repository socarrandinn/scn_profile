import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { IGeneralSummary } from 'modules/rrhh/analytic/interfaces';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import { CountBox, CountBoxDonut } from 'components/libs/analytic/CountBox';
import { FlexBox } from '@dfl/mui-react-common';

type IncomeProps = {
  isLoading: boolean;
  value: IGeneralSummary | undefined;
};
const EmployeeGender = ({ value, isLoading }: IncomeProps) => {
  const { t } = useTranslation('analytic');

  return (
        <FlexBox gap={{ xs: 1, md: 3 }} flexWrap={'wrap'}>
            <CountBox
                icon={<PeopleAltIcon color={'primary'} sx={{ fontSize: 55, mt: -2, mr: 2 }}/>}
                title={t('general.total')}
                value={value?.total}
                size={'large'}
                sx={{ minWidth: 283 }}
                isLoading={isLoading}
            />
            <CountBoxDonut
                title={t('general.genderFemale')}
                total={value?.total}
                value={value?.genderFemale}
                color='primary'
                size={'large'}
                sx={{ minWidth: 329 }}
                isLoading={isLoading}
            >
                <WomanIcon color={'primary'} sx={{ fontSize: 70 }}/>
            </CountBoxDonut>
            <CountBoxDonut
                title={t('general.genderMale')}
                total={value?.total}
                value={value?.genderMale}
                color='primary'
                size={'large'}
                flexGrow
                sx={{ minWidth: 345 }}
                isLoading={isLoading}
            >
                <ManIcon color={'primary'} sx={{ fontSize: 70 }}/>
            </CountBoxDonut>
        </FlexBox>
  );
};

export default memo(EmployeeGender);
