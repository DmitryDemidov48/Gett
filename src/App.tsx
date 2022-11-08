
import './App.css';
import './components/info/info.css'
import './components/header/header.css'
import './components/info/info-block/infoblock-module.css'
import './components/block/block-module.css'
import './components/about-block/aboutblock-module.css'
import './components/FormRow/FormRow-module.css'
import './components/Footer/Footer-module.css'
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import InfoBlock from "./components/info/info-block/InfoBlock";
import Block from "./components/block/Block";
import AboutBlock from "./components/about-block/AboutBlock";
import FormRow from "./components/FormRow/FormRow";
import Footer from "./components/Footer/Footer";



function App() {
  return (
      <div className="App">
      <Header/>
      <Info/>
       <InfoBlock/>
        <Block/>
        <AboutBlock/>
      <FormRow/>
      <Footer/>
      </div>
  );
}

export default App;
