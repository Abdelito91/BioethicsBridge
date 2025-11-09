
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ArticlesPage from './components/ArticlesPage';
import ParticipatePage from './components/ParticipatePage';
import ContactPage from './components/ContactPage';
import type { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onNavigate={() => setActiveSection('articles')} />;
      case 'about':
        return <AboutPage />;
      case 'articles':
        return <ArticlesPage />;
      case 'participate':
        return <ParticipatePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={() => setActiveSection('articles')} />;
    }
  };

  return (
    <div className="bg-brand-bg min-h-screen flex flex-col font-sans text-brand-dark">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
