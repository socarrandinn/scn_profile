import {
  TagListDemoPage,
  HTMLPreviewDemoPage,
  SkeletonFormDemoPage
} from '../pages';

const routes = {
  TagListDemoPage: {
    path: '/data-display/tag-list',
    component: TagListDemoPage,
  },
  HTMLPreviewDemoPage: {
    path: '/data-display/html-preview',
    component: HTMLPreviewDemoPage,
  },
  SkeletonFormDemoPage: {
    path: '/data-display/skeleton-form',
    component: SkeletonFormDemoPage,
  },
};

export default routes;
