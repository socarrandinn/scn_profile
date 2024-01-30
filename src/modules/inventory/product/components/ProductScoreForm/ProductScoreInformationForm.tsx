import { FormEventHandler, memo } from 'react';
import { Form, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import ScoreForm from 'modules/inventory/product/containers/ProductFormSections/ScoreForm';

type ProductScoreInformationFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const ProductScoreInformationForm = ({ error, control, isLoading, onSubmit }: ProductScoreInformationFormProps) => {
  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <ScoreForm />
        </Grid>
      </Form>
    </div>
  );
};
export default memo(ProductScoreInformationForm);
