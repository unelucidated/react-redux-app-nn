import React, { Component } from 'react';

class SignIn extends Component {
    state={
        email:'',
        password:'',
    }
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <input type="email" id="email" onChange={this.handleChange} />
                        <label htmlFor="email" className="active">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" onChange={this.handleChange}/>
                        <label htmlFor="password" className="active">Password</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;