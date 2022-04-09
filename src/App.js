
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './components/Account/Account';
import Description from './components/Description';
import MoiveApi from './components/MoiveApi';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MoiveApi />} />
          <Route path='/Account' element={< Account />} />
          <Route path='/Description' element={<Description />} />

        </Routes>


      </Router>

    </>


  );
}

export default App;
