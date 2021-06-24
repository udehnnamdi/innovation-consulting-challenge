import './App.css';
import { Fragment } from 'react';
import classes from './components/Layout/HeaderButton.module.css'
import Header from './components/Layout/Header';
import SectionOne from './components/Layout/SectionOne';
import SectionTwo from './components/Layout/SectionTwo';
import SectionThree from './components/Layout/SectionThree';
import SectionFour from './components/Layout/SectionFour';
import FooterButton from './components/Layout/FooterButton'
import {useState, useEffect} from 'react';

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  

  const onScrollHandler = () =>{
   
    if(window.scrollY>=750){
      setIsScrolling(true)
    }else{
      setIsScrolling(false)
    }

}



    window.addEventListener('scroll', onScrollHandler)
  

  return (
    <Fragment>
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
       {isScrolling&&<FooterButton/>}
    </Fragment>
  );
}

export default App;
