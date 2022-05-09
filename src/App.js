
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer'

import About from './components/About';
import ClientPage from './pages/ClientsPage';
import DocumentPage from './pages/DocumentsPage';
import LivrePage from './pages/LivresPage';
import MediaPage from './pages/MediasPage';


function App() {
  
  return (
    <Router>
    <div className='container'>
    <ul>
      <li>
        <a href='/clients'>clients</a>
        
      </li>
    
      <li>
        <a href='/documents'>docs</a>
      </li>
      
    </ul>
       <Route path='/clients' component={ClientPage} />
       <Route path='/livres' component={LivrePage} />
       <Route path='/medias' component={MediaPage} />
       <Route path='/documents' component={DocumentPage} />
       <Route path='/about' component={About} />
       <Footer />
    </div>
    </Router>
  );
}

export default App;
