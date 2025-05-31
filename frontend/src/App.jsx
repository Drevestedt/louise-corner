import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter basename="/louise-corner">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
