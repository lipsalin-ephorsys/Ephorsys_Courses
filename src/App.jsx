import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Mern from './pages/course/Mern'
import AIML from './pages/course/Ai-ml'
import Datascience from './pages/course/Datascience'
import DataAnalyst from './pages/course/DataAnalyst'
import About from './pages/about/About'
import Courses from './pages/course/Courses'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/mern' element={<Mern/>}/>
    <Route path='/aiml' element={<AIML/>}/>
    <Route path='/datascience' element={<Datascience/>}/>
    <Route path='/datanalyst' element={<DataAnalyst/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/coursemain' element={<Courses/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App