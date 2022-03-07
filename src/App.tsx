import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="container__content">
        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
