import { PageLayoutPage, CenterPageLayoutPage, PaperPageLayoutPage } from 'modules/demos/layouts/pages';

const routes = {
  PageLayoutPage: {
    path: '/layouts/page',
    component: PageLayoutPage,
  },
  CenterPageLayoutPage: {
    path: '/layouts/center-page',
    component: CenterPageLayoutPage,
  },
  PaperPageLayoutPage: {
    path: '/layouts/paper-page',
    component: PaperPageLayoutPage,
  }
};

export default routes;
