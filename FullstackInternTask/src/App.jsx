import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"



export default function App() {
  return (
    <Routes>
    {/* this is path for the Home page */}
      <Route path="/" element={<Home/>}/>  
      {/* thjis is path for anyother URL which will display 404 {ErrorPage} */}
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}