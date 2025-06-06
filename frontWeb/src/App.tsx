// Configuração do App
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import AppRoutes from './routes';

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;