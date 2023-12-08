import DefaultPage from 'components/DefaultPage';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import About from 'pages/About';
import Cardapio from 'pages/Cardapio';
import Dish from 'pages/Dish';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className="container">
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="prato/:id" element={<Dish />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </main>
  );
}
