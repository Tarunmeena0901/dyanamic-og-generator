import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HeroSection } from "./sections/HeroSection"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
