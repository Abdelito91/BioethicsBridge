
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight sm:text-4xl">
        Connect With Us
      </h2>
      <div className="mt-6 text-lg text-brand-medium leading-relaxed">
        <p>
          For collaborations, inquiries, or further discussion, please do not hesitate to reach out. We welcome connections with individuals and institutions who share our commitment to fostering global ethical dialogue.
        </p>
        <p className="mt-8 font-semibold">
          Email: <a href="mailto:bioethicsbridge@gmail.com" className="text-brand-accent hover:underline">bioethicsbridge@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
