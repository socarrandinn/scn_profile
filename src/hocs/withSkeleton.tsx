import { ReactElement } from 'react';

type WithSkeletonProps = {
  isLoading?: boolean;
  skeletonComponent?: ReactElement;
};

export function withSkeleton<T> (WrappedComponent: React.ComponentType<T & WithSkeletonProps>) {
  const ComponentWithSkeleton = (props: T & WithSkeletonProps) => {
    return props.isLoading && props.skeletonComponent ? props.skeletonComponent : <WrappedComponent {...props} />;
  };
  return ComponentWithSkeleton;
}

export default withSkeleton;
