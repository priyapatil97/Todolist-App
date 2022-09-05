import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Routing from './Components/Routing';
// import Navbar from './Components/Navbar';

function App() {
  return (
       <>
       <BrowserRouter >
          {/* <Navbar /> */}
          <Routing />
       </BrowserRouter>
       
       </>
       
    );
}

export default App;
