import './App.css';
import { Fragment } from 'react';
import Header from './components/Layout/Header';
import SectionOne from './components/Layout/SectionOne';
import SectionTwo from './components/Layout/SectionTwo';
import SectionThree from './components/Layout/SectionThree';
import SectionFour from './components/Layout/SectionFour';
import FooterButton from './components/Layout/FooterButton'
import {useState, useEffect} from 'react';



function App() {
 
const [isScrolling, setIsScrolling] = useState(false);
const [imgVisible, setImageVisible] = useState(true);
let runtime:any = null

const onScrollHandler =()=>{

if(window.scrollY>=750){
  setImageVisible(false)
}else{
  setImageVisible(true)
}
 setIsScrolling(true)

  clearTimeout(runtime)

  runtime = setTimeout(()=>{
    setIsScrolling(false)
  },200)

  
}
  

window.addEventListener('scroll', onScrollHandler)
  

  return (
    <Fragment>
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
       {!imgVisible && !isScrolling&&<FooterButton />}
    </Fragment>
  );
}

export default App;
