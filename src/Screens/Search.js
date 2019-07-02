import React, { Component } from "react";

class Search extends Component {

    render() {
        return (
            <div>
                <center>
                    <input placeholder='Search Book...'
                        style={{
                            borderRadius: '40px',
                            height: '50px',
                            width: '75%',
                            textIndent: '35px',
                            borderColor: 'transparent',
                            boxShadow: '0px 1px 5px rgb(170, 170, 170)',
                            color: 'rgb(148, 148, 148)'
                        }}></input>
                </center>
            </div >
        );
    }
}


export default Search;