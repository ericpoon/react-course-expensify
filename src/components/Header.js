import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = (props) => (
    <header className={'header'}>
        <div className={'content-container'}>
            <div className={'header__content'}>
                {/* Need to pass exact={'true'} to suppress warning */}
                <Link to={'/dashboard'} exact className={'header__title'}>
                    <h1>Expensify</h1>
                </Link>
                <div className={'header__actions'}>
                    <button
                        onClick={() => null}
                        className={'button button--no-background'}
                    >
                        {props.userName}
                    </button>

                    <button
                        onClick={props.startLogout}
                        className={'button button--no-background'}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </header>
);

const mapStateToProps = (state) => ({
    userName: state.auth.name,
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);