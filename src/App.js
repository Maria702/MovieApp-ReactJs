
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Description from './components/Description';

import MoiveApi from './components/MoiveApi';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MoiveApi />} />
          {/* <Route path='/About' element={<About />} /> */}
          <Route path='/Description' element={<Description />} />
        
        </Routes>

      
      </Router>

    </>


  );
}

export default App;
