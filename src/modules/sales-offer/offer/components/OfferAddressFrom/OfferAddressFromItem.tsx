import { memo, useCallback } from 'react';
import { Box, IconButton, ListItem, Tooltip, ListItemText, styled } from '@mui/material';
import { UseFieldArrayRemove } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { findProvinceByStateCode, findMunicipalityByStateAndMunicipality } from '@dfl/location';

export const ListItemCustom = styled(ListItem)(() => ({
  '& .MuiListItemText-root': {
    flex: 'none',
  },
}));

type OfferAddressFromItemProps = {
  removeRule: UseFieldArrayRemove;
  index: number;
  ruleAddress: any;
  addressSection: boolean;
};

const Boxs = {
  bold: <Box component={'span'} fontWeight={600} />,
};

const OfferAddressFromItem = ({ removeRule, index, ruleAddress, addressSection }: OfferAddressFromItemProps) => {
  const { t } = useTranslation('offerOrder');

  const province = findProvinceByStateCode?.(String(ruleAddress?.state));
  const municipality = findMunicipalityByStateAndMunicipality?.(ruleAddress?.state, ruleAddress?.municipality);

  const deleteOneProductRule = useCallback(() => {
    removeRule(index);
  }, [removeRule, index]);

  return (
    <ListItemCustom
      alignItems='center'
      secondaryAction={
        <Tooltip title={t('sections.product.deleteRuleItem')}>
          <IconButton disabled={!addressSection} color='error' onClick={deleteOneProductRule}>
            <DeleteOutlineOutlinedIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemText
        sx={{ width: '30%' }}
        primary={
          <Trans i18nKey={'offerOrder:addres_state_item_rule'} components={Boxs} values={{ state: province?.name }} />
        }
      />
      <ListItemText
        primary={
          <Trans
            i18nKey={'offerOrder:addres_municipality_item_rule'}
            components={Boxs}
            values={{ municipality: municipality ? municipality?.name : t('sections.address.allMunicipality') }}
          />
        }
      />
    </ListItemCustom>
  );
};

export default memo(OfferAddressFromItem);
