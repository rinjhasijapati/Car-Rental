import React, {useEffect, useState} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  //Dark Mode Feature
  const [theme, setTheme] = useState(localStorage.getItem("theme")?
  localStorage.getItem("theme"): "light");

  const element = document.documentElement;
  useEffect(() => {
    if(theme=== "dark"){
      element.classList.add('dark');
      localStorage.setItem("theme", "dark");
    }else{
      element.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  },[theme]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
    </div>
  )
}

export default App

//38:21