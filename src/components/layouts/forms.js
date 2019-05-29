import React, { Component } from 'react';

class Register extends Component {
    render () {
        return (
            <form className="form-signin" style={{width:"100%", maxWidth:"420px", padding:"15px", margin:"0 auto"}}>
                <div className="text-center mb-4">
                    <img className="mb-4" src="e969b20b-6228-4ffb-bd5e-e43cc25610e2.png" alt="" width="90" height="90"/>
                    <h1 className="h3 mb-3 font-weight-normal">Baby Health Tracker</h1>
                    <p>Register to:</p>
                    <p> - Track your baby's height, weight and immunisation schedule. </p>
                    <p> - Get a detailed report on his/her progress in comparison to a child of that gender and age group. </p>
                    <p> - Opt in to receive email/sms notifications when check up is due. </p>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit" style={{backgroundColor:"teal"}}>Sign Up</button>
            </form>
        );
    }
}

export default Register;