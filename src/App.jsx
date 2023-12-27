
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2'
import Page3 from './components/Pages/Page3'
import Page4 from './components/Pages/Page4'
import Page5 from './components/Pages/Page5'
import Page6 from './components/Pages/Page6'
import Page7 from './components/Pages/Page7'
import Crousel from './components/Crousel'
import ProgressionBar from './components/ProgressionBar';



function App() {


  return (
    <>   
      <BrowserRouter>
      <Crousel/>
      <ProgressionBar/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
   <Routes>
     <Route path="/k" element={<Page1/>} />
     {/* Add routes for other pages */}
   </Routes>
 </BrowserRouter>
      
    </>
  )
}

export default App
