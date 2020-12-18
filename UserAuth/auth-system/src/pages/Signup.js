import React, { Component } from 'react';
import axios from 'axios';
class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            sex: 'gender',
            email: '',
            username: '',
            password: '',
            terms: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
        console.log(this.state);
        e.preventDefault();
        axios({
            url: "/newUser",
            method: 'post',
            data: this.state
        })
        .then(function(response){
            console.log(response.data);
            !response.data ?
            alert("Username already exists") : 
            window.location.href = "http://localhost:3000/login";
        })
        .catch(function(error){ 
            console.log(error);
        });
    }

    render() {
        return (
            <div className="signup">

                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                        className="input"
                        value={this.state.firstName}

                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        className="input"
                        value={this.state.lastName}
                        required
                    />
                    <select
                        name="sex"
                        onChange={this.handleChange}
                        className="input gender"
                        value={this.state.sex}
                    >
                        <option value="gender">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        onChange={this.handleChange}
                        className="input"
                        value={this.state.email}
                        required
                    />
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
                            name='terms'
                            checked={this.state.terms}
                            onChange={this.handleChange}

                        />Kindly agree to the Terms of Service
            </label>
                    <button>Sign-Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;