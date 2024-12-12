import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

}from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element = {<Home/>}/>
    <Route path="/dashboard" element = {<Dashboard/>}/>
    </>
  )
)
function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
