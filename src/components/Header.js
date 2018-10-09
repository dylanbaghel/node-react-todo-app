import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from './../actions/authAction';

const Header = (props) => {
    const publicLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link
                    to="/login"
                    className="nav-link"
                >
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/signup"
                    className="nav-link"
                >
                    Sign Up
                </Link>
            </li>
        </ul>
    );
    const privateLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link
                    to="/"
                    className="nav-link"
                    onClick={() => {
                        props.logoutUser();
                    }}
                >
                    Logout
            </Link>
            </li>
        </ul>
    );
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-5">
            <div className="container">
                <Link to="/" className="navbar-brand">Todo</Link>
                {
                    props.isAuthenticated ? privateLinks : publicLinks
                }
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);