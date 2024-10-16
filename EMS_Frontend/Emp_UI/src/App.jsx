import './App.css'
import AddEmp from './Components/AddEmp'
import EditEmp from './Components/EditEmp'
import Home from './Components/Home'
import Navbar from './Components/navbar'
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/addEmp" element={<AddEmp />} ></Route>
        <Route path='/editEmp/:id' element={<EditEmp />}></Route>
      </Routes>
      
    </>
  )
}

export default App
