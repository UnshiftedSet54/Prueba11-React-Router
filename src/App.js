import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='*' element={<h1>Error: 404. Not Found.</h1>}/>
      </Routes>
    </div>
  );
}

export default App;