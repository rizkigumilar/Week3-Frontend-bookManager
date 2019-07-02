import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <p style={{
                    marginBlockStart: '0px',
                    padding: '20px',
                    boxShadow: '0px 10px 8px #888888',
                    fontSize: '40px',
                    fontWeight: 'bold',
                    paddingRight: '1200px',
                    backgroundcolor: 'white'
                }}>BOOKS</p>
            </div >
        );
    }
}
export default Navbar;
