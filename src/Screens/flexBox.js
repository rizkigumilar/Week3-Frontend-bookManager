import React, { Component } from "react";
import './flex.css';

class Flex extends Component {

    render() {
        return (
            <div>
                <div class="flex-container">
                    <div class='div2'>
                        <p>
                            <img class='img' src='https://images-na.ssl-images-amazon.com/images/I/810BkqRP%2BiL.jpg' alt=''></img>
                        </p>
                    </div>
                    <div class='div2'>
                        <p>
                            <img class='img' src='https://kbimages1-a.akamaihd.net/eee22d16-b296-427a-b84f-5fb3608abb4f/1200/1200/False/harry-potter-the-complete-collection-1-7-1.jpg' alt=''></img>
                        </p>
                    </div>
                    <div class='div2'>
                        <p>
                            <img class='img' src='https://kbimages1-a.akamaihd.net/8fb7d2a8-fe85-40b7-9661-63d87772a968/1200/1200/False/harry-potter-and-the-prisoner-of-azkaban-5.jpg' alt=''></img>
                        </p>
                    </div>
                    <div class='div2'>
                        <p>
                            <img class='img' src='https://images-na.ssl-images-amazon.com/images/I/51oSZOESQ6L.jpg' alt=''></img>
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Flex;
