import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../services/Api';
import ChildFeed from '../components/ChildFeed';

class profile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            children: []
        };
        
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        let self = this;
        api.children.viewChildren(config)
          .then(function (response) {
              // console.log(response.data);
              self.setState({children: response.data})
              console.log(self.state.children)
          })
          .catch(function (error) {
              console.log(error.response);
          });
    }
    
    render(){
        return (
          <section id="home">
              <div className="row home">
                  <div className="column">
                      <div className="profiles">
                          <div className="profiles-draft">
                              <h1 className="profiles-draft-title">My Family</h1>
                              <Link to="/add-child" className="profiles-draft-link">Add a child</Link>
                          </div>
                          <div className="profiles-draft-separator" />
                          <div className="profiles-draft-tab">
                              <div className="profiles-draft-tab-content">
                                  <div className="row profiles-draft-item">
                                      <ChildFeed children={this.state.children} />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        );
    }

}


export default profile;