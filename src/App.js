import React, {Component} from 'react';
import './App.css';
import Navbar from './Screens/Navbar';
import Search from './Screens/Search';
import Data from './dataDummy'
import Add from './Screens/add';
import Flex from './Screens/flexBox';
import {Route , BrowserRouter as Router} from 'react-router-dom'
import BookDetail from './Screens/booksDetail'


class App extends Component {
  constructor() {
    super()
    this.state = Data
  }  
  render() {
    return (
      <div>
        <Router>
          <Route exact path={"/"} component={Navbar}/>
          <Route exact path={"/"} component={Search}/>
          <Route exact path={"/"} component={Add}/>
          <Route exact path={"/"} render={()=><Flex data={this.state}/>} />
          <Route exact path={"/book/:bookid"} component={BookDetail}/>
        </Router>
        
      </div>
      
    )
  }
}
export default App;
