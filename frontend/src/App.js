import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Main from './components/main';
import User from './components/user';

import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Navbar from './components/main/Navbar';
import BrowseBlog from './components/main/BrowseBlog';
import Viewblog from './components/main/Viewblog';
import AddBlog from './components/user/AddBlog';
import ManageBlog from './components/user/ManageBlog';
import Managevideos from './components/user/Managevideos';
import UserAuth from './auth/UserAuth';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div >
      <BrowserRouter>
      <UserProvider>
      <Routes>
        <Route path='/' element={<Navigate to ='/home'/>}/>
        <Route path="main" element={<Main/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="navbar" element={<Navbar/>}/>
          <Route path="browseblog" element={<BrowseBlog/>}/>
          <Route path="viewblog" element={<Viewblog/>}/>

        </Route>
        <Route path="user" element={ <UserAuth><User /> </UserAuth>}>
          <Route path="addblog" element={<AddBlog />}/>
          <Route path="manageblog" element={<ManageBlog/>}/>
          <Route path="managevideos" element={<Managevideos/>}/>
          <Route path="navbar" element={<Navbar/>}/>

        </Route>
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
