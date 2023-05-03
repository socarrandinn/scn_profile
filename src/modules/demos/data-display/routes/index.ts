import {
  TagListDemoPage,
  HTMLPreviewDemoPage,
  SkeletonFormDemoPage,
  SkeletonListDemoPage,
  ProcessTimeLineDemoPage,
  LongTextDemoPage,
  ResultDemoPage
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
  SkeletonListDemoPage: {
    path: '/data-display/skeleton-list',
    component: SkeletonListDemoPage,
  },
  ProcessTimeLineDemoPage: {
    path: '/data-display/process-timeline',
    component: ProcessTimeLineDemoPage,
  },
  LongTextDemoPage: {
    path: '/data-display/long-text',
    component: LongTextDemoPage,
  },
  ResultDemoPage: {
    path: '/data-display/result',
    component: ResultDemoPage,
  },
};

export default routes;
