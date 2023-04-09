
import { Route, Routes } from 'react-router-dom'
import Header from './page/Header'
import Page1 from './page/Page1'
import Page2 from './page/Page2'


function App() {

  return (
  <>
    <Routes>
      <Route path='/' element={<Header></Header>}>
        <Route path='/1' element={<Page1></Page1>}></Route>
        <Route path='/2' element={<Page2></Page2>}></Route>
      </Route>
      
    </Routes>
  </>
  )
}

export default App
