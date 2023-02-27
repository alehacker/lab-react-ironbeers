
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Beers from './components/Beer';
import ListBeer from './pages/ListBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Navbar />

      

      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/random-beer' element={<RandomBeer />} />
         <Route path='/beers' element={<ListBeer />}/>
         <Route path='/beers/:id' element={<SingleBeer />}/>
         <Route path='/new-beer' element={<NewBeer />}/>
         <Route path='*' element={<NotFound />}/>
      </Routes>

    </div>
  );
}

export default App;
