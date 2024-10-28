import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import MainLayout from "./layout/MainLayout"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
