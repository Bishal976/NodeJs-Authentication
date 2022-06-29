import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UpdatePro from './components/UpdatePro';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/update" element={<UpdatePro/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
