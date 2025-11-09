import React, { useState } from 'react';

const ParticipatePage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here,
    // for example, by sending the data to a server.
    console.log({ name, email, idea });
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight sm:text-4xl">
        Join the Conversation
      </h2>
      <div className="mt-6 text-lg text-brand-medium leading-relaxed space-y-4">
        <p>
          Dialogue is at the heart of our mission. We believe that every perspective adds value to the conversation. If you have a thought, a reflection, or an idea you wish to share in response to our articles, we warmly invite you to contribute.
        </p>
        <p>
          Please use the form below to send a short message or express your interest in contributing an essay. Your voice is essential to building this bridge.
        </p>
      </div>

      {submitted ? (
        <div className="mt-12 p-8 bg-green-50 border border-green-200 rounded-md text-center">
          <h3 className="text-2xl font-serif font-bold text-green-800">Thank you!</h3>
          <p className="mt-4 text-lg text-green-700">Your reflection has been received. We appreciate you contributing to the dialogue.</p>
        </div>
      ) : (
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-brand-light">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent sm:text-base bg-white text-brand-dark"
                  placeholder="Your Name"
                  aria-label="Name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium text-brand-light">
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent sm:text-base bg-white text-brand-dark"
                  placeholder="you@example.com"
                  aria-label="Email Address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="idea" className="block text-base font-medium text-brand-light">
                Your Reflection or Idea
              </label>
              <div className="mt-2">
                <textarea
                  id="idea"
                  name="idea"
                  rows={6}
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent sm:text-base bg-white text-brand-dark"
                  placeholder="Share your thoughts..."
                  aria-label="Your Reflection or Idea"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center bg-brand-accent text-white font-semibold py-3 px-8 rounded-md hover:bg-brand-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
              >
                Submit Reflection
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ParticipatePage;
