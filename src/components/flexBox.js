import React, { Component } from 'react';
import Data from '../dataDummy';
import '../assets/flex.css';

function text(text) {
	if(text.length > 25){
        let textSplit = text.substr(0, 25)
        return `${textSplit} ...`    
    }else{
        let textSplit = text
		return `${textSplit}`
	}    
}
class Flex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data:Data,
			newData : props
		}
	}
	render() {
		let data = this.state.data
		return (
			<div>
				<div class="flex-container">
				{data.map((item) => {
						return (
							<div class="div">
							<a href={`/book/${item.bookid}`} class="text">
								<img
									class="img"
									src= {item.image_url}
									alt="gambar"
								/>
								<p class="font">{text(item.title)} </p>
								</a>
								
							</div>
						);
					})}

					{console.log('data')}
					
				</div>
			</div>
		);
	}
}
export default Flex;