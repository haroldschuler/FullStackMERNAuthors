import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Create from './views/Create';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new' element={<Create/>} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
