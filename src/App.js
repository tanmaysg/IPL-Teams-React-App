import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from './Teams';
import Fetch from "./Fetch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Teams />}>
                  <Route path="players" element={<Fetch />} />
                </Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
