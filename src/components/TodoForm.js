import React from 'react';
import classnames from 'classnames';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            text: '',
            errors: {}
        };
    }

    handleTextChange(e) {
        let text = e.target.value;
        this.setState(() => ({
            text
        }));
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.state.text.trim()) {
            this.setState(() => ({
                errors: {text: 'Please Enter Todo'}
            }));
            return;
        }
        this.setState(() => ({
            text: ''
        }));
        this.props.onFormSubmit({
            text: this.state.text
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter Todo....."
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            className={classnames('form-control', {
                                'is-invalid': this.state.errors.text
                            })}
                        />
                        <div className="invalid-feedback">
                            {this.state.errors.text}
                        </div>
                    </div>
                    <button className="btn btn-primary">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;