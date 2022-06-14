import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreateBeer from './pages/CreateBeer';
import AllBeers from './pages/AllBeers';
import BeerDetail from './pages/BeerDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/beers' element={<AllBeers/>}/>
          <Route path='/new-beer' element={<CreateBeer/>}/>
          <Route path='/beers/:beerId' element={<BeerDetail random={false}/>}/>
          <Route path='/random-beer' element={<BeerDetail random={true}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
