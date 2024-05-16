import { useState } from "react";
import "./App.css";
import AboutComponent from "./Pages/about/About";
import Faqnews from "./Pages/Faqnews/page";
import Hero from "./Pages/hero/page";
import Loader from "./Pages/loader/page";
import Practice from "./Pages/Practice/Practice"

function App() {
 const[load,setLoad]=useState(true)
  return <>
  {load&& <Loader/>}
    <Hero loading={()=>setLoad(false)}/>
   <AboutComponent/>
   
  <Practice/>
  <Faqnews/></>;
}

export default App;