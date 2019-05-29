import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { api } from '../services/Api';

export class ChildItem extends Component {
    constructor(props) {
        super(props);
        
        this.handleItemDelete = (e) => {
            e.preventDefault();
            const token = localStorage.getItem('token')
            const config = {
                headers: {'Authorization': "bearer " + token}
            };
            const data = {
                id: e.target.id,
                config: config,
            }
            api.children.deleteChild(data)
              .then(function (response) {
                  console.log(response.data);
              })
              .catch(function (error) {
                  console.log(error.response);
              });
        };
        
    }
   
    
    render() {
        const { child } = this.props;
        
        return (
          <div className="column">
              <div className="profiles-draft-tab-content-item">
                  <div classsName="profiles-draft-tab-content-item__image">
                      <img src="" alt="" />
                  </div>
                  <div className="profiles-draft-tab-content-item__content">
                      <h6>{child.name}</h6>
                  </div>
                  
                  <div className="post-readmore sh-table">
                      <div className="sh-table-cell post-readmore-text">
                          <p>Date of birth: {child.birth_date}</p>
                      </div>
                      <div className="sh-table-cell post-readmore-line">
                          <div className="post-readmore-line-content" />
                      </div>
                      <div className="sh-table-cell post-readmore-line">
                          <div className="post-readmore-line-content" />
                      </div>
                      <div className="sh-table-cell">
                          <div
                            className="post-content-share post-content-share-side jssocials"
                          >
                              <div className="jssocials-shares">
                                  <div className="jssocials-share jssocials-share-pencil">
                                      <Link
                                        // to={`/article/${article.slug}/edit`}
                                        className="jssocials-share-link"
                                      >
                                          <i
                                            className="fa fa-pencil jssocials-share-logo"
                                          />
                                      </Link>
                                  </div>
                                  <div className="jssocials-share jssocials-share-trash">
                                      <Link
                                        to="#"
                                        className="jssocials-share-link"
                                        onClick={this.handleItemDelete}
                                      >
                                          <i
                                            id={child.id}
                                            className="fa fa-trash jssocials-share-logo"
                                          />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

ChildItem.defautProps = {
    child: {},
};

ChildItem.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    child: PropTypes.object,
    // deleteArticle: PropTypes.func.isRequired,
};

export default ChildItem;
