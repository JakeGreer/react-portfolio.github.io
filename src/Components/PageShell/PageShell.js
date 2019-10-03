import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionLeave={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        // transitionName={props.match.path === '/about' ? 'SlideIn' : 'SlideOut'}
        transitionName={'SlideIn'}
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

export default PageShell;