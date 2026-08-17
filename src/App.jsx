import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Mern from './pages/course/Mern'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/mern' element={<Mern/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App