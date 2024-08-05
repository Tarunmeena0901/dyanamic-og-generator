import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostPage } from "./pages/PostPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
