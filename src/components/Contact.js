import React, { Component } from 'react';

class Contact extends Component {
    render () {
        return (
            <div>
                <main role="main" className="container" style={{padding:"20% 28% 0", textAlign:"center"}}>
                    <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Send us a message" aria-label="Search"/>
                        <button style={{color:"black", backgroundColor:"teal"}}>Contact Us</button>
                    </form>
                </main>
            </div>
        );
    }
}

export default Contact;
