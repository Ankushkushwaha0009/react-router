import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Error from './Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/'  element = {<Home />}>
              <Route path='/contact' element = {<Contact/>} />
              <Route path='/about' element = {< About />} />
              <Route path='*' element = {< Error />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App ; 