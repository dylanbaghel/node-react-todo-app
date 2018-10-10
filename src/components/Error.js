import React from 'react';
import { connect } from 'react-redux';

export const Error = (props) => {
    return (
        <div className="alert alert-danger">
            {props.error.error_text}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        error: state.error
    };
};

export default connect(mapStateToProps)(Error);