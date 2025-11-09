
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-brand-light">
          &copy; {new Date().getFullYear()} Bioethics Bridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
