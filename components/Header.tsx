
import React from 'react';
import type { Section } from '../types';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const logoBase64 = 'data:image/jpeg;base64,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';


const NavLink: React.FC<{
  section: Section;
  activeSection: Section;
  onClick: (section: Section) => void;
  children: React.ReactNode;
}> = ({ section, activeSection, onClick, children }) => {
  const isActive = section === activeSection;
  return (
    <button
      onClick={() => onClick(section)}
      className={`px-3 py-2 text-sm md:text-base font-medium transition-colors duration-300 ${
        isActive
          ? 'text-brand-accent'
          : 'text-brand-light hover:text-brand-accent'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const navItems: { section: Section; label: string }[] = [
    { section: 'home', label: 'Home' },
    { section: 'about', label: 'About' },
    { section: 'articles', label: 'Articles' },
    { section: 'participate', label: 'Participate' },
    { section: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-brand-bg/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => setActiveSection('home')} className="flex items-center space-x-3 text-left focus:outline-none">
              <img src={logoBase64} alt="Bioethics Bridge Logo" className="h-12 w-auto" />
              <span className="font-serif text-xl font-bold text-brand-dark hidden sm:block">
                Bioethics Bridge
              </span>
            </button>
          </div>
          <nav className="flex items-center space-x-2 md:space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.section}
                section={item.section}
                activeSection={activeSection}
                onClick={setActiveSection}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
