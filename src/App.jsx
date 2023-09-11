import mainRouter  from '../Routes/mainRouter'
import { RouterProvider } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <>
    <RouterProvider router={mainRouter}/>
  
    </>
  )
}

export default App
