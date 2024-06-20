import { Header } from './Components/Header/Header';
import {HashRouter as Router , Routes ,Route} from 'react-router-dom'
import './App.scss'
import { Home } from './Components/Home/Home';
import { SearchPage } from './Components/Search/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
