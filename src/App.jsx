import './App.css';
import React from 'react';  
import Header from './components/Header';
import Footer from './components/Footer'; 
import './i18n.jsx';
import { useTranslation } from 'react-i18next';
import AppRoutes from './routes';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />

      <AppRoutes />

      <Footer />
    </div>
  );
};

export default App;
