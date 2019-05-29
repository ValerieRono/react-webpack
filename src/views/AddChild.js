import React, { Component } from 'react';

import { api } from '../services/Api'

class AddChild extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      name : "",
      birth_date : "",
      weight_at_birth: "",
      height_at_birth : "",
    };
    
    this.handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
    
    this.handleSubmit = (e) => {
      e.preventDefault();
      const { history } = this.props;
      const token = localStorage.getItem('token')
      const config = {
        headers: {'Authorization': "bearer " + token}
      };
      const details = {
        name : this.state.name,
        birth_date : this.state.birth_date,
        weight_at_birth: this.state.weight_at_birth,
        height_at_birth : this.state.height_at_birth,
      }
      const data = {
        payload: details,
        config: config,
      }
      console.log(details);
      api.children.addChild(data)
        .then(function (response) {
          console.log(response.data);
          history.push('/profile');
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
              id="inputName"
              className="form-control"
              name="name"
              placeholder="name"
              required=""
              autoFocus=""
              onChange={this.handleChange}
            />
            <label htmlFor="inputName">name</label>
          </div>
          
          <div className="form-label-group">
            <input
              type="date"
              id="inputDateOfBirth"
              className="form-control"
              name="birth_date"
              required=""
              onChange={this.handleChange}
            />
            <label htmlFor="inputDateOfBirth">Date of Birth</label>
          </div>
          
          <div className="form-label-group">
            <input
              type="number"
              id="inputWeight"
              className="form-control"
              name="weight_at_birth"
              required=""
              onChange={this.handleChange}
            />
            <label htmlFor="inputEmail">Weight</label>
          </div>
          
          <div className="form-label-group">
            <input
              type="number"
              id="inputHeight"
              className="form-control"
              name="height_at_birth"
              required=""
              onChange={this.handleChange}
            />
            <label htmlFor="inputPassword">Height</label>
          </div>
          
          <button className="btn btn-lg btn-primary btn-block" style={{backgroundColor:"teal"}}>Add Child</button>
        </form>
      </div>
    );
  }
}

export default AddChild;