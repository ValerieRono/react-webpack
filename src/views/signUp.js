import React, { Component } from 'react';

import { api } from '../services/Api'

class signUp extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
        username : "",
        first_name : "",
        last_name : "",
        email : "",
        password : ""
        };
    
        this.handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        }
    
        this.handleSubmit = (e) => {
            e.preventDefault();
            const { history } = this.props;
            const data = {
                username : this.state.username,
                first_name : this.state.first_name,
                last_name : this.state.last_name,
                email : this.state.email,
                password : this.state.password
            }
            api.user.signup(data)
            .then(function (response) {
                console.log(response.data);
                history.push('/signIn');
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
        };
    }

    render (){
        return (
            <div role="main" className="container" style={{padding:"60px 15px 0", maxWidth:"420px"}}>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="text-center mb-4">
                        <img
                          className="mb-4"
                          src="e969b20b-6228-4ffb-bd5e-e43cc25610e2.png"
                          alt="company logo"
                          width="90"
                          height="90"
                        />
                        <h1 className="h3 mb-3 font-weight-normal">Join 4MOMS</h1>
                    </div>

                    <div className="form-label-group">
                        <input
                          type="text"
                          id="inputUserName"
                          className="form-control"
                          name="username"
                          placeholder="username"
                          required=""
                          autoFocus=""
                          onChange={this.handleChange}
                        />
                        <label htmlFor="inputUserName">Username</label>
                    </div>

                    <div className="form-label-group">
                        <input
                          type="text"
                          id="inputFirstName"
                          className="form-control"
                          name="first_name"
                          placeholder="first_name"
                          required=""
                          onChange={this.handleChange}
                        />
                        <label htmlFor="inputFirstName">First name</label>
                    </div>

                    <div className="form-label-group">
                        <input
                          type="text"
                          id="inputLastName"
                          className="form-control"
                          name="last_name"
                          placeholder="last_name"
                          required=""
                          onChange={this.handleChange}
                        />
                        <label htmlFor="inputLastName">Last name</label>
                    </div>

                    <div className="form-label-group">
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          name="email"
                          placeholder="email"
                          required=""
                          onChange={this.handleChange}
                        />
                        <label htmlFor="inputEmail">Email</label>
                    </div>

                    <div className="form-label-group">
                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          name="password"
                          placeholder="password"
                          required=""
                          onChange={this.handleChange}
                        />
                        <label htmlFor="inputPassword">Password</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block" style={{backgroundColor:"teal"}}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default signUp;