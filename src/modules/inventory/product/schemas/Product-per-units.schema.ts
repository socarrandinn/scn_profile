import * as Yup from 'yup';
import '@dfl/yup-validations';

export const productPerUnitsSchema = Yup.object().shape({
  amount: Yup.number(),
  typeOfMeasure: Yup.string().min(2, 'min-2').max(255, 'max-255').nullable(),
  measure: Yup.string().min(2, 'min-2').max(255, 'max-255').nullable(),
  displayMeasure: Yup.string().min(2, 'min-2').max(255, 'max-255').nullable(),
});
