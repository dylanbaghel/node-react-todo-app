import React from 'react';
import { connect } from 'react-redux';

import AuthForm from './AuthForm';
import { registerUser } from './../actions/authAction';
import Error from './Error';

const SignUp = (props) => {
    return (
        <div className="container">
            {props.hasErrors && <Error />}
            <div className="card card-body">
                <h4 className="card-title">Sign Up</h4>
                <AuthForm 
                    onSubmit={(userData) => {
                        props.registerUser(userData);
                    }}
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (userData) => dispatch(registerUser(userData))
    };
};

const mapStateToProps = (state) => {
    return {
        hasErrors: !!state.error.error_text
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);