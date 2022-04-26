import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Header from './components/Header'
import Landing from './components/Landing'
import Login from './components/Login'
function App() {
  const [component,setComponent]=useState("landing")
  return (
    <div className="App">
     <Header setComponent={setComponent} component={component} />
     {component==="landing"&& <Landing />}
     {component==="login"&& <Login />}
    </div>
  );
}

export default App;
