import React from "react";
import State from "./State";
import Login from "./Login";
import Regester from "./Regester";
import { useForm}  from "react-hook-form";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Routes>

      <Route 
              exact path="/"
              element={ <Regester/>}
            >

</Route>
<Route 
              exact path="/login"
              element={ <Login/>}
            >

</Route>
      </Routes>
    
      </Router>
    </>
  


  );
}

export default App;
