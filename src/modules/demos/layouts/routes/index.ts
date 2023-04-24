import {
  PageLayoutPage,
  CenterPageLayoutPage,
  ScrollPageLayoutPage,
  PaperPageLayoutPage,
  TabsPaperPageLayoutPage
} from 'modules/demos/layouts/pages';

const routes = {
  PageLayoutPage: {
    path: '/layouts/page',
    component: PageLayoutPage,
  },
  CenterPageLayoutPage: {
    path: '/layouts/center-page',
    component: CenterPageLayoutPage,
  },
  ScrollPageLayoutPage: {
    path: '/layouts/scroll-page',
    component: ScrollPageLayoutPage,
  },
  PaperPageLayoutPage: {
    path: '/layouts/paper-page',
    component: PaperPageLayoutPage,
  },
  TabsPaperPageLayoutPage: {
    path: '/layouts/tabs-page',
    component: TabsPaperPageLayoutPage,
  }
};

export default routes;
