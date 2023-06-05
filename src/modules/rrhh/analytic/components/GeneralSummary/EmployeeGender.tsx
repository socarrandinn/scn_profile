import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerSection } from 'components/libs/analytic/ContainerSection';
import { SummaryBox } from 'components/libs/analytic/SummaryBox';
import { IGeneralSummary } from 'modules/rrhh/analytic/interfaces';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import { SummaryBoxWithIcon } from 'components/libs/analytic/SummaryBoxWithIcon';

type IncomeProps = {
  isLoading: boolean;
  value: IGeneralSummary | undefined;
};
const EmployeeGender = ({ value, isLoading }: IncomeProps) => {
  const { t } = useTranslation('analytic');

  return (
        <ContainerSection>
            <SummaryBox
                title={t('summary.total')}
                total={value?.total}
                color='primary'
                isLoading={isLoading}
            />
            <SummaryBoxWithIcon
                title={t('debt.shipping.total')}
                total={value?.total}
                value={value?.genderFemale}
                color='primary'
                isLoading={isLoading}
            >
                <WomanIcon color={'primary'} sx={{ fontSize: 70 }}/>
            </SummaryBoxWithIcon>
            <SummaryBoxWithIcon
                title={t('debt.shipping.total')}
                total={value?.total}
                value={value?.genderMale}
                color='primary'
                isLoading={isLoading}
            >
                <ManIcon color={'primary'} sx={{ fontSize: 70 }}/>
            </SummaryBoxWithIcon>
        </ContainerSection>
  );
};

export default memo(EmployeeGender);
