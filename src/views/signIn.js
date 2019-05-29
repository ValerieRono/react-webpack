import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../services/Api';

class signIn extends Component {
    constructor(props) {
        super(props);

        this.state = { 
        username : "",
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
                password : this.state.password
            }
            api.user.signin(data)
            .then(function (response) {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                history.push('/profile');
            })
            .catch(function (error) {
                console.log(error);
            });
        };
    }

    render () {
        return (
            <div role="main" className="container" style={{padding:"60px 15px 0", maxWidth:"420px"}}>
                <form onSubmit={this.handleSubmit} className="form-signin">
                    <div className="text-center mb-4">
                        <img
                          className="mb-4"
                          src="e969b20b-6228-4ffb-bd5e-e43cc25610e2.png"
                          alt="company logo"
                          width="90"
                          height="90"
                        />
                        <h1 className="h3 mb-3 font-weight-normal">LOG IN</h1>
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
                        <label htmlFor="inputEmail">Username</label>
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

                    <button
                      type="submit"
                      className="btn btn-lg btn-primary btn-block"
                      style={{backgroundColor:"teal"}}
                    >
                        Sign In
                    </button>
                </form>
                
                <p style={{paddingTop:"20px"}}>New to 4moms?
                    <Link to="/register" style={{color:"teal"}}>  Sign Up</Link>
                </p>
            </div>
        );
    }
}
export default signIn;