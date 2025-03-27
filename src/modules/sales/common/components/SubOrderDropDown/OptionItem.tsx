import { useToggle } from '@dfl/hook-utils';
import ItemActions from './ItemActions';
import { FlexBox } from '@dfl/mui-react-common';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { StyledMenuItem, StyledPaperShadow, SubMenu } from '../../constants/drop-down-styled';

type Props = {
  label: string;
  add?: boolean;
  allCount?: number;
  selectedCount?: number;
  selectedAction: () => void;
  allAction: () => void;
  onClose: () => void;
};

export const OptionItem = ({
  label,
  add,
  onClose,
  allCount = 0,
  selectedCount = 0,
  selectedAction,
  allAction,
}: Props) => {
  const { isOpen, onOpen, onClose: closePopup } = useToggle();

  const handleClose = () => {
    closePopup();
    onClose?.();
  };

  return (
    <div>
      <StyledMenuItem id={`${add ? 'add' : 'update'}-option-button`} onMouseEnter={onOpen} onMouseLeave={closePopup}>
        <FlexBox onClick={handleClose} justifyContent={'space-between'} width={400} style={{ gap: '8px' }}>
          {label}
          <ArrowRightIcon />
        </FlexBox>
        <SubMenu isOpen={isOpen}>
          <StyledPaperShadow elevation={2}>
            <ItemActions
              add={add}
              onClose={handleClose}
              selectedAction={selectedAction}
              allAction={allAction}
              selectedCount={selectedCount}
              allCount={allCount}
            />
          </StyledPaperShadow>
        </SubMenu>
      </StyledMenuItem>
    </div>
  );
};
