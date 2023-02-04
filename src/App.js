import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ThemeCards from "./Pages/ThemeCards/ThemeCards";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />}></Route>

        <Route path="/card/:themeName" element={<ThemeCards />}></Route>
        <Route path="/cards/:id" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
