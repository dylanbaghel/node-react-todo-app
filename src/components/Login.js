import React from 'react';
import { connect } from 'react-redux';

import AuthForm from './AuthForm';
import { loginUser } from './../actions/authAction';
import Error from './Error';

export const Login = (props) => {
    return (
        <div className="container">
            {props.hasErrors && <Error />}
            <div className="card card-body">
                <h4 className="card-title">Login</h4>
                <AuthForm 
                    onSubmit={(userData) => {
                        props.loginUser(userData);
                    }}
                />
            </div> 
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (userData) => dispatch(loginUser(userData))
    };
};

const mapStateToProps = (state) => {
    return {
        hasErrors: !!state.error.error_text
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);