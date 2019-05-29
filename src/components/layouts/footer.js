import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer className="footer" style={{position:"absolute", bottom:0, backgroundColor:"white", textAlign:"center", width:"100%", height:"60px", lineHeight:"60px"}}>
                <div className="container" style={{textAlign:"center"}}>
                    <span className="text-muted" style={{textAlign:"center"}}>© 2019-2020 4MOMS</span>
                </div>
            </footer>
        );
    }
}

export default Footer;