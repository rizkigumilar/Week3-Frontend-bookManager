import React, { Component } from 'react';
import Data from '../dataDummy';
import '../assets/flex.css';


function text(text) {
    if (text.length > 25) {
        let textSplit = text.substr(0, 25)
        return `${textSplit} ...`
    } else {
        let textSplit = text
        return `${textSplit}`
    }
}
class Flex extends Component {
    constructor() {
        super();
        this.state = Data;
    }
    render() {
        return (
            <div>
                <div class="flex">
                    {this.state.map((item) => {
                        return (
                            <div class="div">
                                <a href={`/book/${item.bookid}`}>
                                    <img
                                        class="img"
                                        src={item.image_url}
                                        alt="gambar"
                                    />
                                    <p class="font">{text(item.title)} </p>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Flex;
