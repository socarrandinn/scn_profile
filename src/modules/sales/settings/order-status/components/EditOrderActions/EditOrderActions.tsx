import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import { RowActions } from '@dfl/mui-admin-layout'
import { useTranslation } from 'react-i18next';

interface IEditOrderActions {
  index: number;
  onUpAction: () => void;
  onDownAction: () => void;
  isLoading: boolean;
  order: number
}

const EditOrderActions = ({ index, onUpAction = () => {}, onDownAction = () => {}, isLoading, order }: IEditOrderActions) => {
  const { t } = useTranslation('orderStatus')
  return (
    <>
      {order > 0 && (
        <RowActions
          icon={ArrowUpward}
          tooltip={t('actions.incrementPriority')}
          onClick={() => {
            onUpAction();
          }}
          disabled={isLoading}
        />
      )}
      <RowActions
        icon={ArrowDownward}
        tooltip={t('actions.decrementPriority')}
        onClick={() => {
          onDownAction();
        }}
        disabled={isLoading}
      />
    </>
  );
}

export default EditOrderActions
