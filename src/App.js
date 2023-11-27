
import './App.css';

import { useState } from 'react';

import Header from './common/header/Header';

// import { Route, Routes } from "react-router-dom";

import AppRoute from './common/app_routes/AppRoute';

// import Home from "./feature/home/Home";
// import About from "./feature/about/About";

// import ManageCourse from './feature/manage_course/ManageCourse';
// import AddCourseForm from './feature/manage_course/add_course/AddCourseForm';
// import EditCourseForm from './feature/manage_course/edit_course/EditCourseForm';

// import ViewCourse from './feature/manage_course/view_course/ViewCourse'

// import LoginForm from './feature/login/LoginForm'

import AuthContext from './common/context/auth-context';



function App() {
  
const [isLoggedIn, setIsLoggedIn] = useState(false);


const loginHandler = () => {
  setIsLoggedIn(true);
}

const logoutHandler = () => {
  setIsLoggedIn(false);
}

  

  return (

    <div className="App">

    <AuthContext.Provider value={
      {isLoggedIn : isLoggedIn,
        onLogIn : loginHandler,
        onLogout : logoutHandler}
    }>
      <Header />

      <AppRoute />

      {/* <Routes>
      
      
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      
        <Route path="/courses" element={<ManageCourse />} />
        <Route path="/add_course" element={<AddCourseForm />} />
        <Route path="/view_course/:id" element={<ViewCourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/edit_course/:id" element={<EditCourseForm />} />
      
      
      </Routes>
      
       */}
      
      </AuthContext.Provider> 
      
    </div>
  );
}

export default App;
