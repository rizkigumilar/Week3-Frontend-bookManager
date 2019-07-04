import React, { Component } from 'react';
import './assets/App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Data from './dataDummy'
import Add from './components/add';
import Flex from './components/flexBox';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import BookDetail from './Screens/booksDetail'
import Modal from './components/modal'


class App extends Component {
  constructor() {
    super()
    this.state = Data
  }
  render() {
    return (
      <div>
        <Router>
          <Route exact path={"/"} component={Navbar} />
          <Route exact path={"/"} component={Search} />
          <Route exact path={"/"} component={Add} />
          <Route exact path={"/"} render={() => <Flex data={this.state} />} />
          <Route exact path={"/book/:bookid"} component={BookDetail} />
          <Route exact path={"/book/:bookid"} component={Modal}/>
        </Router>

      </div>

    )
  }
}
export default App;
