import { BrowserRouter , Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin" ;
import SignUp from "./pages/SignUp" ;
import About from "./pages/About" ;

export default function App() {
  return <BrowserRouter>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/about' element={<About />} />
   </Routes>
  </BrowserRouter>
} 
  