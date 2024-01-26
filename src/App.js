import './App.css';
// import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from './pages/Upload';
import Signup from './pages/Signup';
import Removal from "./pages/Removal"
import Tagger from './pages/Tagger';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/removal" element={<Removal />} />
        <Route path="/tags" element={<Tagger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
