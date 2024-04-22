import { Routes,Route,Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';
import Nghiem from './pages/Nghiem';
import Count from './pages/Count';
import Resours from './pages/resours';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li> <Link  to="/" >Home</Link></li>
          <li> <Link to="News" >News</Link></li>  
          <li> <Link  to="Contact" >Contact</Link></li>
          <li> <Link  to="Nghiem" >nghiem</Link></li>
          <li> <Link  to="Count" >Count</Link></li>
          <li> <Link  to="resours" >resours</Link></li>
          <li> <Link  to="About" >About</Link></li>


        </ul>
      </nav>
      <Routes>
<Route path="/" element={<HomePage/>}></Route>
<Route path="News/" element={<NewsPage/>}></Route>
<Route path="Contact/" element={<ContactPage/>}></Route>
<Route path="Nghiem/" element={<Nghiem/>}></Route>
<Route path="Count/" element={<Count />}> </Route>
<Route path="resours/" element={<Resours />}> </Route>
<Route path='About' element={<About />}> </Route>

</Routes>
    </div>
  );
}


export default App;
