import { RowActions } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface IEditOrderActions {
  index: number;
  onUpAction: () => void;
  onDownAction: () => void;
  isLoading: boolean;
  order: number;
}

const EditOrderActions = ({
  index,
  onUpAction = () => {},
  onDownAction = () => {},
  isLoading,
  order,
}: IEditOrderActions) => {
  const { t } = useTranslation('orderStatus');
  return (
    <>
      {order > 0 && (
        <RowActions
          icon={ExpandLessIcon}
          tooltip={t('actions.incrementPriority')}
          onClick={() => {
            onUpAction();
          }}
          disabled={isLoading}
        />
      )}
      <RowActions
        icon={ExpandMoreIcon}
        tooltip={t('actions.decrementPriority')}
        onClick={() => {
          onDownAction();
        }}
        disabled={isLoading}
      />
    </>
  );
};

export default EditOrderActions;
