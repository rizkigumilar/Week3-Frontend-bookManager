import React, { Component } from 'react'
import '../App.css'
import Nav from '../components/Navbar'
import Search from '../components/search'
import List from '../components/book'
import Data from '../data/dataDummy'
import BookDetail from '../screens/booksDetail'
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Modal from '../components/modal'
import ModalDelete from '../components/delete'

class Routers extends Component {
  constructor() {
    super()
    this.state = { Data, show: false, modalDelete: false ,search:''}
  }
  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }
  showModalDelete = () => {
    this.setState({ modalDelete: true })
  }

  hideModalDelete = () => {
    this.setState({ modalDelete: false })
  }
  addData = (data) => {
    this.state.Data.push(data)
    console.log(this.state.Data)
  }
  deleteData = (index) => {
    this.state.Data.splice(index, 1)
    console.log(this.state.Data)
  }
  editData = (index, editData) => {
    this.setState(Data[index] = editData)
  }
  setSearch = (search) =>{
    this.setState({search:search})
  }
  render() {
    return (
      <div id="app">
        <Router>
          <Redirect to="/book" />
          <Route exact path={"/book"} component={Nav} />
          <Route exact path={"/book"} render={()=><Search setSearch={this.setSearch}/>} />
          <Route exact path={"/book"} render={() => <List prop={this.state} search={this.state.search} showModal={this.showModal} />} />
          <Route exact path={"/book"} render={() => <Modal show={this.state.show} dataState={this.state} handleClose={this.hideModal} dataAdded={this.addData} />} />
          <Route exact path={"/book/:bookid"} render={(props) => <BookDetail data={this.state} showModal={this.showModal} showModalDelete={this.showModalDelete} {...props} />} />
          <Route exact path={"/book/:bookid"} render={(props) => <ModalDelete data={this.state} deleteData={this.deleteData} modalDelete={this.state.modalDelete} hideModalDelete={this.hideModalDelete} {...props} />} />
          <Route exact path={"/book/:bookid"} render={(props) => <Modal dataState={this.state} show={this.state.show} handleClose={this.hideModal} dataEdited={this.editData} {...props} />} />
        </Router>
      </div>
    )
  }
}
export default Routers