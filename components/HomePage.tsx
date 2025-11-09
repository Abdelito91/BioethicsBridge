
import React from 'react';

interface HomePageProps {
    onNavigate: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-brand-dark tracking-tight">
          Ethics, Science, and Our Shared Future.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-brand-light max-w-3xl mx-auto">
          Fostering a thoughtful dialogue on bioethics between the Arab world and the United States.
        </p>
        <div className="mt-12 text-base text-brand-medium space-y-6 text-left leading-relaxed max-w-3xl mx-auto">
          <p>
            Welcome to Bioethics Bridge, a dedicated space for reflection at the intersection of science, culture, and ethics. In an era of rapid technological advancement, we believe that calm, considered dialogue is more vital than ever.
          </p>
          <p>
            This platform serves as an intellectual meeting point, offering an English-language window into diverse ethical perspectives from the Arab world and the United States. Our goal is to explore the profound questions that shape our shared humanity and build a community dedicated to understanding.
          </p>
        </div>
        <div className="mt-12">
          <button
            onClick={onNavigate}
            className="inline-block bg-brand-accent text-white font-semibold py-3 px-8 rounded-md hover:bg-brand-medium transition-colors duration-300"
          >
            Explore the Dialogue
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
