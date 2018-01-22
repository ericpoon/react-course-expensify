import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth';

export const LoginPage = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <div className="box-layout__actions">
        <button
          onClick={props.startGoogleLogin}
          className="button button--google"
        >
          Login with Google
        </button>
        <button
          onClick={props.startFacebookLogin}
          className="button button--facebook"
        >
          Login with Facebook
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
