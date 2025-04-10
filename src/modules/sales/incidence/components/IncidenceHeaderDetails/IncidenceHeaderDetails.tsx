import { memo } from 'react';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useIncidenceDetail } from '../../context/IncidenceDetailContext';
import { incidenceTabs } from '../../constants/incidence-tabs';
import IncidenceActionsHeader from '../IncidenceActionsHeader/IncidenceActionsHeader';
import { Section } from 'modules/common/components/HeaderSummaryTabs/styled';
import { IncidenceStatusPicker } from '../IncidenceStatusPicker';
import { INCIDENCE_STATUS_ENUM } from '../../constants/incidence-status';
import { DateValue, FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { EditIcon } from 'components/icons/EditIcon';
import { useToggle } from '@dfl/hook-utils';
import IncidenceCreateModal from '../../containers/IncidenceCreateModal';
import DeleteIcon from 'components/icons/DeleteIcon';
import { Delete } from '@mui/icons-material';

const IncidenceHeaderDetails = () => {
  const { t } = useTranslation('incidence');
  const { incidence, isLoading, error, incidenceId } = useIncidenceDetail();
  const { isOpen, onClose, onOpen } = useToggle();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <>
      <Section sx={{ padding: '24px 24px 0px 30px', gap: 0.5, minHeight: 'auto' }}>
        <FlexBox justifyContent={'space-between'} mb={1} alignItems={'flex-start'}>
          <IncidenceActionsHeader
            code={incidence?.code}
            orderId={incidence?.orderReference?._id}
            title={incidence?.code as string}
            actions={
              <>
                <Button variant='contained' color='error' startIcon={<DeleteIcon />} onClick={onOpen} sx={{ boxShadow: '8px 16px 32px rgba(43, 52, 69, 0.22)' }}>
                  {t('common:edit')}
                </Button>
                <Button variant='outlined' startIcon={<EditIcon />} onClick={onOpen}>
                  {t('common:edit')}
                </Button>
              </>
            }
            orderCode={incidence?.orderReference?.code}
            incidenceTitle={incidence?.cause?.name}
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
