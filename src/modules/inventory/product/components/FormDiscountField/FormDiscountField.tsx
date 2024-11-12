import { FormTextFieldProps, NumberValue, useDFLForm } from '@dfl/mui-react-common';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { FormTextFieldWithOptions } from 'components/TextFieldWithOptions';
import { memo, useMemo, useState } from 'react';
import { PriceType, WarehouseCostConfigDto } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { Checkbox, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

type FormDiscountFieldProps = FormTextFieldProps & {
  initPriceType?: string;
  warehouses?: WarehouseCostConfigDto[];
};

const options = Object.values(PriceType);

const costOptions = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };

const FormDiscountField = ({ initPriceType, warehouses, ...props }: FormDiscountFieldProps) => {
  const { watch } = useDFLForm();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const defaultValue = props.defaultValue || { type: options[0], value: 0 };
  const value = watch?.(props.name) || defaultValue;
  let startAdornment = useMemo(() => (value.type === options[0] ? '%' : '$'), [value.type]);

  if (initPriceType !== undefined) {
    initPriceType === 'PERCENT' ? (startAdornment = '%') : (startAdornment = '$');
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const maxIndex = warehouses?.reduce(
    (maxIdx, warehouse, idx) =>
      warehouse.value > warehouses[maxIdx]?.value ? idx : maxIdx,
    0
  );

  return (
    <>
      <FormTextFieldWithOptions
        {...props}
        disabled={props.readOnly}
        inputComponent={NumberFormatCustom}
        options={options}
        textFieldValue='value'
        optionFieldValue='type'
        startAdornment={startAdornment}
        endAdornment={warehouses && warehouses?.length > 0 &&
          <>
            <Typography sx={{ fontSize: '30px', color: 'text.secondary' }}>|</Typography>
            <IconButton onClick={handleClick}>
              <ExpandMore />
            </IconButton>
          </>
        }
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {warehouses?.map((warehouse: WarehouseCostConfigDto, index) => (
          <MenuItem key={index} sx={{ gap: 1 }}>
            <OutlinedInput
              id={`discount-${warehouse?.warehouse}`}
              readOnly
              value={warehouse?.warehouseName}
              endAdornment={
                <InputAdornment position='end'>
                  <Typography sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {warehouse?.type === PriceType.FIXED && '$'}
                    <NumberValue value={warehouse?.value} options={costOptions} />
                    {warehouse?.type === PriceType.PERCENT && '%'}
                  </Typography>
                  <Checkbox checked={index === maxIndex} sx={{ ml: 1 }} />
                </InputAdornment>
              }
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default memo(FormDiscountField);
