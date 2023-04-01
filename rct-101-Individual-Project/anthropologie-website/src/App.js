
import './App.css';
import Allroute from './RouteandPage/Allroute';
import Navbar from './Headers/Navbar';
import Usernavbar from './Headers/Usernavbar';
import {AuthContext } from "./Context/Authcontext";
import { useContext } from "react";
import { Footer } from './Footer/Footer';

function App() {
  const {isAuth}=useContext(AuthContext)
  return (
    <div className="App">
      {isAuth?<Navbar />:<Usernavbar />}
        <Allroute />
        <Footer />
    </div>
  );
}

export default App;
