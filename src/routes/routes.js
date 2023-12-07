import DefaultPage from 'components/DefaultPage';
import Menu from 'components/Menu';
import About from 'pages/About';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
