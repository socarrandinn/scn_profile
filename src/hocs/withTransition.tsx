import { Fade } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

const transitionTypes = {
  fade: {
    component: Fade,
    props: {},
  },
  'slide-up': {
    component: Fade,
    props: {},
  },
  'slide-down': {
    component: Fade,
    props: {},
  },
  'slide-left': {
    component: Fade,
    props: {},
  },
  'slide-right': {
    component: Fade,
    props: {},
  },
};

type WithTransitionProps = {
  transitionType: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  in: boolean;
  transitionComponentProps?: TransitionProps;
};

export function withTransition<T>(WrappedComponent: React.ComponentType<T & WithTransitionProps>) {
  const ComponentWithTransition = (props: T & WithTransitionProps) => {
    const TransitionCmp = transitionTypes[props.transitionType]?.component || Fade;
    const transitionCmpProps = transitionTypes[props.transitionType]?.props;
    return (
      <TransitionCmp in={true} {...transitionCmpProps} {...props.transitionComponentProps}>
        <div>
          <WrappedComponent {...props} />
        </div>
      </TransitionCmp>
    );
  };
  return ComponentWithTransition;
}

export default withTransition;
