import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = (props) => {
  const { isAuthenticated, component: Component, ...restProps } = props;
  const ActualComponent = (componentProps) => {
    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return <Component {...componentProps} />;
  };

  return <Route {...restProps} component={ActualComponent} />;
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
