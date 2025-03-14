import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";





export default function App() {
  return (
    <BrowserRouter>
   
      <Routes>


        <Route path="/" element={<Welcome />}>
       
  
        </Route>
      </Routes>
 
    </BrowserRouter>
  );
}
