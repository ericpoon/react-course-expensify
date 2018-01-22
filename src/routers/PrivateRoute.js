import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = (props) => {
  const { isAuthenticated, component: Component, ...restProps } = props;
  const ActualComponent = (componentProps) => {
    if (isAuthenticated) {
      return (
        <div>
          <Header />
          <Component {...componentProps} />
        </div>
      );
    }
    return <Redirect to="/" />;
  };

  return <Route {...restProps} component={ActualComponent} />;
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
