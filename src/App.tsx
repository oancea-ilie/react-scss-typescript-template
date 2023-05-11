import Footer from '@components/layout/footer/Footer';
import Header from '@components/layout/header/Header';
import { routes } from '@utils/routes';
import { Routes, Route } from 'react-router-dom';
import '@styles/global.scss';

function App() {
  // eslint-disable-next-line no-console
  console.log('source map is enabled in development mode');

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
