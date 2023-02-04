<<<<<<< HEAD

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
=======
import "./App.css";
import { CarouselPlain } from "./Utils/Carousels/Carousels";

>>>>>>> 85e808e (Added CarouseL Plain In Utils)
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/card' element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cards/:id' element={<Home/>}></Route>
    </Routes>
    <div className="App">
<<<<<<< HEAD
      <NavBar/>
=======
      <CarouselPlain
        themeImage="https://picsum.photos/1200/300"
        themeName="BIRTHDAY"
      />
>>>>>>> 85e808e (Added CarouseL Plain In Utils)
    </div>
    </BrowserRouter>
  );
}

export default App;
