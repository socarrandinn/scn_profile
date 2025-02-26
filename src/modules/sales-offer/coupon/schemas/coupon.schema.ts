import * as Yup from 'yup';

import { offerSchema } from 'modules/sales-offer/offer/schemas/offer.schema';

export const couponSchema = Yup.object()
  .shape({
    code: Yup.string().required('required').min(2, 'min-2'),
  })
  .concat(offerSchema);
