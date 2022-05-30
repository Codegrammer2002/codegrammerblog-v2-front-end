// import React from "react";
// import Header from "./components/header/Header";
// import Post from "./components/post/Post";
// import Topbar from "./components/topbar/Topbar";
// function App() {
//   return (
//     <div className="App">

//      <Header />
//      <Post />
    
//     </div>
//   );
// }

// export default App;
import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Error404 from "./pages/error404/Error404";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
function App() {
  const user = false;

  return (
    <Router>
   
    <Topbar isUser = {user} /> 
    <div className="App">
    <Routes>
    <Route path ='/' element =  { <Home />  } exact /> 
    <Route path ='/home' element = {<Home />} exact /> 
    <Route path ='/register' element = {!user ? <Home /> : <Register />} exact /> 
    <Route path ='/login' element = { !user ? <Home /> : <Login />} exact /> 
    <Route path ='/write' element = {<Write />} exact /> 
    <Route path ='/about' element = {<About />} exact /> 
    <Route path ='/contact' element = {<Contact />} exact /> 

    <Route path ='/settings' element = { !user ? <Home /> : <Settings />} exact /> 
    <Route path = '/posts/:postID' element ={<Single />} />
    <Route path = '*' element ={<Error404 />} />


    </Routes>
  
    </div>
    </Router>
  );
}

export default App;