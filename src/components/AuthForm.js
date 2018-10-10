import React from 'react';
import classnames from 'classnames';
import isEmail from 'validator/lib/isEmail';

class AuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    handleEmailChange(e) {
        const email = e.target.value;
        this.setState(() => ({
            email
        }));
    }

    handlePasswordChange(e) {
        const password = e.target.value;
        this.setState(() => ({
            password
        }));
    }

    onFormSubmit(e) {
        e.preventDefault();

        if (!this.state.email.trim()) {
            this.setState(() => ({
                errors: { email: 'Please Enter Email' }
            }));
            return;
        } else if (!isEmail(this.state.email)) {
            this.setState(() => ({
                errors: {email: 'Please Enter Valid Email'}
            }));
            return;
        }
        if (!this.state.password.trim()) {
            this.setState(() => ({
                errors: { password: 'Please Enter Password' }
            }));
            return;
        } else if (this.state.password.length < 6) {
            this.setState(() => ({
                errors: { password: 'Password Must Be Greater Then 6 Characters.'}
            }));
            return;
        }
        this.setState(() => ({
            errors: {}
        }));
        this.props.onSubmit({
            email: this.state.email,
            password: this.state.password
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Email"
                            className={classnames('form-control', {
                                'is-invalid': this.state.errors.email
                            })}
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            onKeyUp={(e) => {
                                const email = e.target.value;
                                if (!isEmail(email)) {
                                    this.setState(() => ({
                                        errors: {email: 'Please Enter Valid Email'}
                                    }));
                                } else {
                                    this.setState(() => ({
                                        errors: {}
                                    }));
                                }
                            }}
                        />
                        <div className="invalid-feedback">
                            <small className="text-danger">{this.state.errors.email}</small>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className={classnames('form-control', {
                                'is-invalid': this.state.errors.password
                            })}
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                        <div className="invalid-feedback">
                            <small className="text-danger">{this.state.errors.password}</small>
                        </div>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;