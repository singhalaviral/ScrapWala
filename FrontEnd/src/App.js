import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Routes,Switch,Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Why from './components/Why'
import ScrapRates from './components/ScrapRates';
import PickupForm from './components/PickupForm';
import LogINform1 from './components/LogINform1';
import meeting from './components/meeting';
import Confirmation from './components/Confirmation';
import AdminLogin from './components/AdminLogin';
// import UserLogin  from './services/user-service';
import AddUser from './components/AddUser';
import AdminRights from './components/AdminRights';
import ShowScraps from './components/ShowScraps';



 

function App() {
   return (
    <div>
      {/* <ScrapRates/> */}
  {/* //  <div className="page-container">
  //   <div className="content-wrap"></div> */}
    {/* <Header /> */}
    {/* <switch> */}
     {/* <Routes exact path ="/" component={ScrapRates}/> */}
     {/* <Redirect to="/"/> */}
     {/* </switch> */}
 
     {/* <h1>Hello from react</h1> */}
    
    {/* <Blogs/> */}
    {/* <Why/> */}
     
    

     <Navbar />
     {/* <LogINform1/> */}
     {/* <PickupForm/> */}

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path='/ScrapRates' element={<ScrapRates/>}/>
      <Route exact path='/Why' element={<Why/>}/>
      <Route exact path='/PickupForm' element={<PickupForm />} />
      <Route exact path='/AdminLogin' element={<AdminLogin/>}/>
     {/* <Route exac path='/meeting' element={<meeting/>}/> */}
     <Route  path='/Confirmation' element={<Confirmation/>}/>
     <Route path='/AddUser' element={<AddUser/>}/>
     <Route path='/AdminRights' element={<AdminRights/>}/>
     <Route path='/ShowScraps' element={<ShowScraps/>}/>


     </Routes>
     </BrowserRouter>
     


{/* 
     <Home/>
     <Footer /> */}


     

        
   </div>
  );
}

export default App;
