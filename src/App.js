import React,{useState}from 'react';
import './App.css';
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 200){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop);

  return (
    <div className="App">

        <div id='page-container'>
            <div id='content-wrap'>
                <Content/>
            </div>
            <Footer id='footer'/>
        </div>

      <button  className="scrollTop"
                          onClick={scrollTop}
                          style={{display: showScroll ? 'flex' : 'none'}}>up</button>
    </div>
  );
}

export default App;
