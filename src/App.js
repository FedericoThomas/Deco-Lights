import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting = 'Bienvenidos a Deco&Lights todo para su hogar' />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/item/:productId' element={<ItemDetailContainer/>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
