import { InputsPage, ValidationPage, AsyncValidationPage, ConditionalValidationPage } from 'modules/demos/forms/pages';

const routes = {
  InputsPage: {
    path: '/forms/inputs',
    component: InputsPage,
  },
  ValidationPage: {
    path: '/forms/validations',
    component: ValidationPage,
  },
  AsyncValidationPage: {
    path: '/forms/async-validation',
    component: AsyncValidationPage,
  },
  ConditionalValidationPage: {
    path: '/forms/conditional-validation',
    component: ConditionalValidationPage,
  }
};

export default routes;
