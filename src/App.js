import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import './index.css';
import ScrollToTop from './Scroll';
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route element={<Home />} path='/' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
