import * as Yup from 'yup';
import '@dfl/yup-validations';

export const timeOffSchema = Yup.object().shape({
  policy: Yup.string().required('required'),
  startDate: Yup.string().required('required'),
  endDate: Yup.string().required('required')
    .test('is-greater', 'endDateGreaterThanStartDate',
      function (value) {
        const startDate = new Date(this.parent.startDate);
        const endDate = new Date(value);

        return startDate < endDate;
      }),
});
