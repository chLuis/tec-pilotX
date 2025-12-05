import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PostPage from "./pages/Post"
import { ToastProvider } from "./providers/toast-provider"

function App() {


  return (
    <ToastProvider initialData={null}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/post/:id" element={<PostPage />} />
    </Routes>
    </ToastProvider>
  )
}

export default App
