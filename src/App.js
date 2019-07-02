import React from 'react';
import Navbar from './Screens/Navbar';
import './App.css';
import Search from './Screens/Search';
import Add from './Screens/add';
import Flex from './Screens/flexBox';


function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Add />
      <Flex />

    </div>
  );
}

export default App;
