import React from 'react'
import UserList from './components/UserList'
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

const App = () => {
  return (
    <div className='continer'>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </div>
  )
}

export default App
