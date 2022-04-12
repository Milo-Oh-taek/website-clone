import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Biz from './page/biz';
import Career from './page/career';
import Layout from './components/Layout';
import ScrollTotop from './components/ScrollTotop';

function App() {
  return (
    <BrowserRouter>
      <ScrollTotop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Biz />} />
          <Route path="/career" element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
