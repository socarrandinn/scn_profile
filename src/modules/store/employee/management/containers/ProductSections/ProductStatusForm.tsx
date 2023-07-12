import { FormTextField } from '@dfl/mui-react-common';
import { Grid, Box, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SelectProductStatusAutocomplete from 'modules/store/employee/management/components/SelectProductStatusAutocomplete/SelectProductStatusAutocomplete';
import { useCallback, useState } from 'react';

const ProductStatusForm = () => {
  const { t } = useTranslation('product');
  const [dark, setDark] = useState(false);
  const [hasHelperText, setHasHelperText] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  const handleChange = useCallback((event: SelectChangeEvent<string>) => {
    setSelectedStatus(event.target.value);
  }, []);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
      <Box sx={{ width: '100%' }}>
        <SelectProductStatusAutocomplete
            dark={dark}
            value={selectedStatus}
            onChange={handleChange}
            helperText={hasHelperText ? 'Este producto estara disponible para 2 canales de venta' : undefined}
        />
      </Box>
      </Grid>
    </Grid>
  );
};

export default ProductStatusForm;