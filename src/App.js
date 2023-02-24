
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Beers from './components/Beer';
import ListBeer from './pages/ListBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';


function App() {
  return (
    <div className="App">
      <Navbar />

      

      <Routes>
         <Route path='/' element={<Home />} ></Route>
         <Route path='/random-beer' element={<RandomBeer />}></Route>
         <Route path='/beers' element={<ListBeer />}></Route>
         <Route path='/beers/:id' element={<SingleBeer />}></Route>
         <Route path='/new-beer' element={<NewBeer />}></Route>
      </Routes>

    </div>
  );
}

export default App;
