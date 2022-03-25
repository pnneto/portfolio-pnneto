import { Layout } from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Projects from 'pags/Projetos';
import Certificados from 'pags/Certificados'
import Index from 'pags/Index';


function App() {
  return (
    
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/certificados" element={<Certificados />} />
        </Routes>
        <Footer />
        </Layout>
    </BrowserRouter>
    
  );
}

export default App;




