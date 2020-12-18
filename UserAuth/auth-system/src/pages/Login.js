import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { authContext } from '../use-auth.js'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            keepSignedin: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    static propTypes = {
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    static contextType = authContext;

    handleChange(e) {
        const { name, value, checked, type } = e.target;
        type === "checkbox" ?
            this.setState({
                [name]: checked
            }) :
            this.setState({
                [name]: value
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        const auth = this.context;
        //const { history } = this.props;

        auth.login(this.state)
    }
    
    render() {
        return (
            <div className="signup">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>

                    <input
                        type="text"
                        name="username"
                        placeholder="User Name"
                        onChange={this.handleChange}
                        className="input"
                        value={this.state.username}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        className="input"
                        value={this.state.password}
                        required
                    />
                    <label className={"input checkbox"}>
                        <input
                            type="checkbox"
                            name='keepSignedin'
                            checked={this.state.keepSignedin}
                            onChange={this.handleChange}

                        />Keep me signed in.
            </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);