import React from 'react'
import List from './data'
import Cards from './Card'
import Fun from './test'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return <div className='container'>
    {List.map((ele) => <Cards key={ele.id} data={ele} />)}
  </div>
}

export default App;