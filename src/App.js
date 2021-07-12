// import logo from './logo.svg';
// import React,{useState} from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';  
// import Student from './Student';
// import User from './FunctionComponent';
// import User from './ClassComponent';

function App() {
  // const [name,setName]=useState("Avneet")
  return (
    <div className="App">
    <Header />
    <Body />
    <Footer />
    {/* <Student name={name} /> */}
    {/* <button onClick={() => {setName("Vijay")}}>Update Name</button> */}
    </div>
  );
}



export default App;
