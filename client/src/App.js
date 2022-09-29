import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import List from "./pages/list/list.jsx"
import Hotel from "./pages/hotel/hotel.jsx";
import Login from "./pages/Login/Login.jsx";
function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/list" element={<List />}/>
      <Route path="/list/:id" element={<Hotel />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
