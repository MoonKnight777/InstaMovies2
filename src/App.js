import { Header } from './Components/Header/Header';
import {HashRouter as Router , Routes ,Route} from 'react-router-dom'
import './App.scss'
import { Home } from './Components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
