/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo, SetStateAction, useState, Dispatch, useCallback } from 'react';
import { AsyncSelectAutocompleteField, FlexBox } from '@dfl/mui-react-common';
import { ACTIONS_SELECT_PRODUCT_QUERY_KEY } from 'modules/sales/incidence/constants/actions-queries';
import { Button, FormControl, InputLabel, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';

const muckUpData = [
  {
    _id: '1',
    product: 'Product 1',
    price: '$40.00',
    quantity: 4,
    value: 100,
    reimbursement: 2,
    inventory: 3,
  },
  {
    _id: '2',
    product: 'Product 2',
    price: '$44.00',
    quantity: 4,
    value: 100,
    reimbursement: 3,
    inventory: 10,
  },
];

const productService = (
  payload: any,
): Promise<{
  data: any;
  total: number;
  hasMore: boolean;
}> =>
  new Promise((resolve) => {
    resolve({ data: muckUpData, total: 2, hasMore: false });
  });

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

type Props = {
  setProducts: Dispatch<SetStateAction<any[] | undefined>>;
};

const IncidenceActionToolbar = ({ setProducts }: Props) => {
  const { t } = useTranslation('incidence');

  const [product, setProduct] = useState<any | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeProduct = (e: any) => {
    setProduct(e?.target?.value);
  };

  const handleChangeQuantity = (value: number) => {
    setQuantity(value);
  };

  const handleChangeNewReplacement = useCallback(() => {
    setProducts((prev) => [...(prev || []), { ...product, quantity }]);
  }, [product, quantity, setProducts]);

  return (
    <FlexBox width='100%' alignItems={'center'} justifyContent={'space-between'} gap={2}>
      <div className='flex-1'>
        <AsyncSelectAutocompleteField
          fetchFunc={productService}
          queryKey={ACTIONS_SELECT_PRODUCT_QUERY_KEY}
          label={t('actions.fields.product')}
          value={product}
          onChange={handleChangeProduct}
          multiple={false}
          isOptionEqualToValue={isOptionEqualToValue}
          getOptionLabel={(option: any) => {
            return option?.product;
          }}
          renderOption={(props, option: any) => {
            return (
              <li {...props} key={option._id as string}>
                {option.product}
              </li>
            );
          }}
        />
      </div>
      <div className='max-w-full md:w-[281px]'>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>{t('actions.field.quantity')}</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={quantity}
            label={t('actions.field.quantity')}
            onChange={(e) => {
              handleChangeQuantity(+e?.target?.value);
            }}
          >
            {Array.from(Array(50).keys())?.map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Button
        variant='contained'
        disabled={!product}
        className='h-[50px] min-w-[114px]'
        onClick={handleChangeNewReplacement}
      >
        {t('actions.add')}
      </Button>
    </FlexBox>
  );
};

export default memo(IncidenceActionToolbar);
