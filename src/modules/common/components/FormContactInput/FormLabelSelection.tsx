import { memo } from 'react';
import { DropDownBase, FormFieldControl, useDFLForm } from '@dfl/mui-react-common';
import { Button, ListItemText, MenuItem, Typography } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { ArrowDropDown } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type LabelSelectionProps = {
  options: string[];
  name: string;
  ns?: string;
  className?: string;
  readOnly?: boolean;
  value?: string;
  dark?: boolean;
  required?: boolean;
  selectedValue?: boolean;
  onChange?: (event?: any) => void;
};

const sx = { minWidth: 100 };

const LabelSelection = ({ options, onChange, ns, value, className }: LabelSelectionProps) => {
  const { isLoading, disabled, readOnly } = useDFLForm();
  const { isOpen, onOpen, onClose } = useToggle();
  const { t } = useTranslation(ns || 'phoneTypes');
  const handleChange = (value: string) => {
    onChange?.({
      target: { value },
    });
    onClose();
  };

  const button = (
    <Button
      disabled={isLoading}
      className={!value ? 'placeholder-select' : ''}
      endIcon={!readOnly ? <ArrowDropDown /> : undefined}
      disableRipple
    >
      {value
        ? (
            t(value)
          )
        : (
          <Typography color={'text.secondary'} fontSize={12}>
            {' '}
            {t('common:select')}
          </Typography>
          )}
    </Button>
  );

  return (
    <DropDownBase
      button={button}
      open={isOpen && !disabled && !readOnly && !isLoading}
      onOpen={onOpen}
      onClose={onClose}
      className={className}
    >
      {options.map((item) => (
        <MenuItem
          key={item}
          sx={item === value ? { backgroundColor: 'primary.light', ...sx } : sx}
          onClick={() => {
            handleChange(item);
          }}
        >
          <ListItemText>{t(item)}</ListItemText>
        </MenuItem>
      ))}
    </DropDownBase>
  );
};

export default memo(LabelSelection);

export const FormLabelSelectionField = (props: LabelSelectionProps) => {
  return <FormFieldControl {...props} Component={LabelSelection} />;
};
