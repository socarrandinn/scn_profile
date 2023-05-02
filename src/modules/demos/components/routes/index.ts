import { ButtonDemosPage, InputDemosPage, SelectDemosPage, BooleanDemosPage, DatetimeDemosPage, OthersDemosPage } from '../pages';

const routes = {
  ButtonDemosPage: {
    path: '/components/buttons',
    component: ButtonDemosPage,
  },
  InputDemosPage: {
    path: '/components/textFields',
    component: InputDemosPage,
  },
  SelectDemosPage: {
    path: '/components/select',
    component: SelectDemosPage,
  },
  BooleanDemosPage: {
    path: '/components/boolean',
    component: BooleanDemosPage,
  },
  DatetimeDemosPage: {
    path: '/components/datetime',
    component: DatetimeDemosPage,
  },
  OthersDemosPage: {
    path: '/components/others',
    component: OthersDemosPage,
  }
};

export default routes;
