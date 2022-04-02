import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Coins from './components/Coins/Coins';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/coins' element={<Coins />}></Route>
          <Route path='/content' element={<Content />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/coin-details/:id' element={<CoinDetails />}></Route>
        </Routes>
    </div>
  );
}

export default App;
