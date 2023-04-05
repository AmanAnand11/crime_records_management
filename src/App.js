//import logo from './logo.svg';
//import Login from './Components/Login';

//import ViewCase from './components/ViewCase';
//import Home from './components/Home';
//import ForensicsHome from './components/ForensicsHome';
//import Forensics from './components/Forensics';
//import ForensicUpdate from './components/ForensicUpdate';
import './App.css';
import React from "react";
import Home from './Components/Home';
import Login from './Components/Login';



import {Routes, Route } from 'react-router-dom';
import PoliceHome from './Components/PoliceHome';
import NewFIR from './Components/NewFIR';
import ForensicsHome from './Components/ForensicHome';


function App() {
 
  return (
    
    <Routes>
       <Route path="/" element={<Home/> } />
       <Route path="/login" element={<Login />} />
       <Route path="/police" element={<PoliceHome/>} />  
       <Route path="/forensichome" element={<ForensicsHome/>} />     
       <Route path="/newfir" element={<NewFIR/>} />
      
   </Routes>
    
  );

}

export default App;

/*
<Route path="/newfir" component={NewFIR} />
<Route path="/viewcase/:caseId" component={ViewCase} />
<Route path="/forensichome" component={ForensicsHome} />
        <Route path="/crimedata/forensics/:caseId/" component={Forensics} />
        <Route path="/forensicUpdate/:caseId" component={ForensicUpdate} />*/

/*<Switch>
        <Redirect exact from="/" to="/home" />
        </Switch>*/





/*class App extends Component {

render() {
  return (
    <Router history={history}>   
        <Redirect from="/" to="/home" />
        <Route> 
          <Route path = "police" component = {PoliceHome}/>
          <Route path = "newfir" component = {NewFIR}/>
          <Route path = "viewcase/:caseId" component = {ViewCase}/>
          <Route path = "home" component = {Home}></Route>
          <Route path = "forensichome" component = {ForensicsHome}></Route>
          <Route path = "crimedata/forensics/:caseId/" component = {Forensics}/>   
          <Route path = "forensicUpdate/:caseId" component = {ForensicUpdate}></Route>  
           
        </Route>                 
    </Router>
);
}
}*/



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

