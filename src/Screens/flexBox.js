import React, { Component } from "react";
import './flex.css';

class Flex extends Component {

    render() {
        return (
            <div>
                <div class="flex-container">
                    <div class='div2'>
                        <img class='img' src='https://images-na.ssl-images-amazon.com/images/I/810BkqRP%2BiL.jpg' alt='Gambar Buku'></img>
                        <h5> Fifty Shades of Grey</h5>
                    </div>
                    <div class='div2'>
                        <img class='img' src='https://pictures.abebooks.com/isbn/9780739408254-us.jpg' alt='Gambar Buku'></img>
                        <h5> The lord of The Rings</h5>
                    </div>
                    <div class='div2'>
                        <img class='img' src='https://images-na.ssl-images-amazon.com/images/I/81-DFVziuwL.jpg' alt='Gambar Buku'></img>
                        <h5> Divergent</h5>
                    </div>
                    <div class='div2'>
                        <img class='img' src='https://images-na.ssl-images-amazon.com/images/I/51oSZOESQ6L.jpg' alt='Gambar Buku'></img>
                        <h5> Harry potter</h5>
                    </div>

                </div>
            </div>
        );
    }
}

export default Flex;
