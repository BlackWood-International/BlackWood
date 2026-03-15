import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Divisions from './pages/Divisions';
import Governance from './pages/Governance';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import GlobalPresence from './pages/GlobalPresence';
import StockNews from './pages/StockNews';
import Minerva from './pages/Minerva';
import BCI from './pages/BCI';

export default function App() {
  return (
    // Ajout de la propriété basename ici
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="divisions" element={<Divisions />} />
          <Route path="divisions/bci" element={<BCI />} />
          <Route path="gouvernance" element={<Governance />} />
          <Route path="presence-mondiale" element={<GlobalPresence />} />
          <Route path="actualites-boursieres" element={<StockNews />} />
          <Route path="minerva" element={<Minerva />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </Router>
  );
}
