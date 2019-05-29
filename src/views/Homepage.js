import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Homepage extends Component {
    render () {
        return (
            <div style={{textAlign:"center"}}>
                <main
                  role="main"
                  className="container"
                  style={{padding:"60px 15px 0", textAlign:"center", maxWidth:"420px"}}
                >
                  <div style={{textAlign:"center", maxWidth:"420px"}}>
                    <form className="form-signin" style={{width:"100%", maxWidth:"420px"}}>
                      <div className="text-center mb-4">
                        <img
                          className="mb-4"
                          src="e969b20b-6228-4ffb-bd5e-e43cc25610e2.png"
                          alt="company logo"
                          width="90"
                          height="90"
                        />
                        <h1 className="h3 mb-3 font-weight-normal">Baby Health Tracker</h1>
                        <p>Register to: </p>
                        <p>-Track your baby's height, weight and immunisation schedule</p>
                        <p>-Get detailed reports on your baby's health progress in comparison to a child of the same age and gender</p>
                        <p>-Opt in to receive email/sms notification when your baby's check up is due</p>
                      </div>
                      <Link
                        className="btn btn-lg btn-primary btn-block"
                        style={{backgroundColor:"teal"}}
                        to="/register"
                      >
                        Register
                      </Link>
                    </form>
                  </div>
                </main>
            </div>
        );
    }
}

export default Homepage;
