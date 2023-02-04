
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/card' element={<Home/>} exact></Route>
      <Route path='/home' element={<Home/>} exact></Route>
      <Route path='/cards/:id' element={<Home/>} exact></Route>
    </Routes>
    <div className="App">
      <NavBar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
