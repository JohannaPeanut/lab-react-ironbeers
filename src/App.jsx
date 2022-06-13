import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SingleBeer from './pages/SingleBeer';
import CreateBeer from './pages/CreateBeer';
import AllBeers from './pages/AllBeers';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/beers' element={<AllBeers/>}/>
          <Route path='/random-beer' element={<SingleBeer/>}/>
          <Route path='/new-beer' element={<CreateBeer/>}/>
          <Route path='/beers/:beerId' element={<SingleBeer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
