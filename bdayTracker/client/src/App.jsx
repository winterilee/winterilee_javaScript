import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './views/Main';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/bdayTracker/*"} element={<Main/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
