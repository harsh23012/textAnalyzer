import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import TextForm from './components/TextForm';
import {React, useState} from 'react';
import Notification from './components/Notification';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';



function App() {

  const[mode, setMode] = useState('light');
  const[textMode, setTextMode] = useState('dark');
  const[myStyle, setmyStyle] = useState({
    color : 'black',
    backgroundColor: 'white'
  });
  // const[myTheme, setMyTheme] = useState({
  //   color : 'black',
  //   backgroundColor: 'white'
  // });
  const[alert,setAlert] = useState(null);

  const showAlert = (msg, type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setTextMode('light');
      setmyStyle({
        color: 'white',
      })
      document.body.style.backgroundColor = '#212529e6';
      showAlert('Dark Mode enabled', 'success');
    }
    else{
      setMode('light');
      setTextMode('dark');
      setmyStyle({
        color: 'black'
      })
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode enabled', 'success');
    }
  }
  
  // const theme = (col1,col2)=>{
  //   setMyTheme({
  //     color: col1,
  //     backgroundColor: col2
  //   })
  //   // document.body.style.backgroundColor = col2;
  // }
  return (
    <>
    <Router>
      <NavbarComp title="TextUtils" mode = {mode} textMode={textMode} toggleMode={toggleMode}/>
      <Notification alert={alert}/>
      <Switch>
        <Route exact path="/about">
          <About myStyle={myStyle} mode = {mode} textMode={textMode}/>
        </Route>
        <Route exact path="/home">
        <TextForm myStyle={myStyle} textMode={textMode} mode={mode} showAlert={showAlert}/>
        </Route>
        <Route exact path="/textAnalyzer/">
        <TextForm myStyle={myStyle} textMode={textMode} mode={mode} showAlert={showAlert}/>
        </Route>
        <Route exact path="/">
        <TextForm myStyle={myStyle} textMode={textMode} mode={mode} showAlert={showAlert}/>
        </Route>
        <Route exact path="/contact">
          <Contact myStyle={myStyle} mode = {mode} textMode={textMode}/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
