
import React from 'react';

const SectionWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">{children}</div>
);

const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight sm:text-4xl">{children}</h2>
);

const SectionContent: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="mt-6 space-y-6 text-lg text-brand-medium leading-relaxed">{children}</div>
);

const AboutPage: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Our Vision</SectionTitle>
      <SectionContent>
        <p>
          Bioethics Bridge was founded on a simple yet profound idea: that meaningful progress arises from mutual understanding. Our vision is to create an elegant and accessible digital space where cultural perspectives on science and medicine can be shared with clarity and respect.
        </p>
        <p>
          We are committed to fostering intercultural dialogue, promoting deep ethical reflection, and making complex topics accessible to a global audience. By connecting thinkers, creators, and the public, we aim to illuminate the common ground and unique insights that enrich our collective approach to life's most pressing ethical challenges.
        </p>
      </SectionContent>
      
      <div className="mt-16 pt-12 border-t border-gray-200">
         <h3 className="text-2xl font-serif font-bold text-brand-dark sm:text-3xl">Why Bioethics Matters</h3>
         <div className="mt-6 text-lg text-brand-medium leading-relaxed">
            <p>
              Bioethics is not an abstract academic discipline; it is the study of how we navigate the moral dimensions of health, life, and the environment. It touches everything from personal medical decisions and genetic technologies to public health policies and our relationship with the natural world. Engaging with these questions helps us build a more just, compassionate, and thoughtful future for all.
            </p>
         </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutPage;
