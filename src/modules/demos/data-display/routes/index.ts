import {
  TagListDemoPage,
  HTMLPreviewDemoPage,
  SkeletonFormDemoPage,
  ProcessTimeLineDemoPage
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
  ProcessTimeLineDemoPage: {
    path: '/data-display/process-timeline',
    component: ProcessTimeLineDemoPage,
  },
};

export default routes;
