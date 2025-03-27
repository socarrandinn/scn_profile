import { memo } from 'react';
import { RouterTab, useParamsLink } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useIncidenceDetail } from '../../context/IncidenceDetailContext';
import { incidenceTabs } from '../../constants/incidence-tabs';
import IncidenceActionsHeader from '../IncidenceActionsHeader/IncidenceActionsHeader';
import { Section } from 'modules/common/components/HeaderSummaryTabs/styled';
import { IncidenceStatusPicker } from '../IncidenceStatusPicker';
import { INCIDENCE_STATUS_ENUM } from '../../constants/incidence-status';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Button, IconButton } from '@mui/material';
import { EditIcon } from 'components/icons/EditIcon';
import { MoreVert } from '@mui/icons-material';
import { useToggle } from '@dfl/hook-utils';
import IncidenceCreateModal from '../../containers/IncidenceCreateModal';

const IncidenceHeaderDetails = () => {
  const { t } = useTranslation('incidence');
  const { incidence, isLoading, error, incidenceId } = useIncidenceDetail();
  const { isOpen, onClose, onOpen } = useToggle();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <>
      <Section sx={{ padding: '24px 24px 0px 30px', gap: 0.5 }}>
        <FlexBox alignItems={'center'} justifyContent={'space-between'}>
          <IncidenceActionsHeader
            code={incidence?.code}
            title={incidence?.code as string}
            incidenceTitle={incidence?.cause?.name}
            orderCode={incidence?.orderReference?.code}
            message={incidence?.subCause?.name ? `(${t('fields.subCause')}) ${incidence?.subCause?.name}` : undefined}
            noActions
            referenceType={incidence?.referenceType}
          >
            <FlexBox alignItems={'center'} gap={4} mb={1}>
              <DateValue value={incidence?.createdAt} format='MM/dd/yyyy hh:mm a' />
              <IncidenceStatusPicker
                value={incidence?.status as INCIDENCE_STATUS_ENUM}
                rowId={incidenceId}
                readOnly
              />
            </FlexBox>
          </IncidenceActionsHeader>
          <div className='flex gap-2 items-center'>
            <Button variant='outlined' startIcon={<EditIcon />} onClick={onOpen}>
              {t('common:edit')}
            </Button>
            <MoreVert />
          </div>
        </FlexBox>
        <RouterTab
          tabs={incidenceTabs}
          prefix={`/sales/incidences/${incidenceId}`}
          translationNs={'provider'}
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
        />
      </Section >
      <IncidenceCreateModal
        title={'edit'}
        open={isOpen}
        onClose={onClose}
        initValue={incidence}
        loadingInitData={isLoading}
        dataError={error}
      />
    </>
  );
};

export default memo(IncidenceHeaderDetails);
