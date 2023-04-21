import { memo } from 'react'
import { DropDownBase, FormFieldControl } from '@dfl/mui-react-common';
import { Button, ListItemText, MenuItem, styled } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { ArrowDropDown } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type ContactLabelSelectionProps = {
  options: string[],
  name: string;
  className?: string;
  value?: string;
  dark?: boolean;
  required?: boolean;
  selectedValue?: boolean;
  onChange?: (event?: any) => void;
}

export const ButtonAction = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23);',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  // background: theme.palette.background.paper
}));

const sx = { minWidth: 100 };

const ContactLabelSelection = ({
  options,
  name,
  onChange,
  value,
  selectedValue = true,
  className
}: ContactLabelSelectionProps) => {
  const { isOpen, onOpen, onClose } = useToggle();
  const { t } = useTranslation('phoneTypes');
  const handleChange = (value: string) => {
    onChange?.({
      target: { value }
    });
    onClose()
  }

  const button = <Button
        // variant={'outlined'}
        endIcon={<ArrowDropDown/>}
        disableRipple
    >
        {value ? t(value) : t('common:select')}
    </Button>

  return (
        <DropDownBase button={button} open={isOpen} onOpen={onOpen} onClose={onClose} className={className}>
            {options.map((item) => (
                <MenuItem key={item}
                          sx={item === value ? { backgroundColor: 'primary.light', ...sx } : sx}
                          onClick={() => {
                            handleChange(item);
                          }}>
                    <ListItemText>{t(item)}</ListItemText>
                </MenuItem>
            ))}
        </DropDownBase>

  );
}

export default memo(ContactLabelSelection);

export const FormContactLabelSelectionField = (props: ContactLabelSelectionProps) => {
  return <FormFieldControl {...props} Component={ContactLabelSelection}/>;
};
