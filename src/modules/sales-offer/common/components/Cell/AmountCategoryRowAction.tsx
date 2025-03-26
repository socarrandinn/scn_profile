import { IconButton } from '@dfl/mui-react-common';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type Props = {
  removeRule: () => void;
  disabled?: boolean;
};
const AmountCategoryRowAction = ({ removeRule, disabled }: Props) => {
  const { t } = useTranslation('offerOrder');
  return (
    <div>
      <IconButton
        tooltip={t('sections.category.deleteRuleItem')}
        disabled={disabled}
        color='error'
        onClick={removeRule}
      >
        <DeleteOutlineOutlined fontSize='small' />
      </IconButton>
    </div>
  );
};

export default AmountCategoryRowAction;
