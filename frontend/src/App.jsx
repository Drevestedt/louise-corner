import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import BookTable from './pages/BookTable';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Admin from './pages/Admin';

function App() {

  return (
    /* basename for Docker */
    <BrowserRouter basename="/"> {/* basename for GH-pages: basename="/louise-corner/" */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
