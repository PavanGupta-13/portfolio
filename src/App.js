import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Contact from './components/Contact/Contact';

function App() {
  return (
<Router>
      <Routes>
      <Route exact path="/" element={<LandingPage/>}>  
      </Route>
        <Route exact path="/home" element={<LandingPage />}/>
          {/* <Route index element={<LandingPage />} /> */}
          <Route exact path="moreinfo" element={<MoreInfo/>}/>
          <Route exact path="contact" element={<Contact/>} />
          <Route path="*" element={<></>} />
      </Routes>
    </Router>
  //   <div className="App">
  //     <header className="App-header">
  //       <LandingPage/>
  //     </header>
  //   </div>
  // );
  )
}

export default App;
