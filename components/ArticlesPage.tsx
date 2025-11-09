import React, { useState } from 'react';
import type { Article } from '../types';
import { articles } from '../data/articles';

const ArticleListPage: React.FC<{
  onSelectArticle: (article: Article) => void;
}> = ({ onSelectArticle }) => (
  <>
    <div className="text-center">
      <h2 className="text-3xl font-serif font-bold text-brand-dark tracking-tight sm:text-4xl">
        Reflections on Science and Humanity
      </h2>
      <div className="mt-6 max-w-2xl mx-auto text-lg text-brand-medium leading-relaxed">
        <p>
          Here, you will find a curated collection of essays from a diverse range of voices. We invite you to explore contemporary topics in bioethics, from genetic research to the role of culture in medicine. Each piece is an invitation to pause, reflect, and learn.
        </p>
      </div>
    </div>
    <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
      {articles.map((article) => (
        <div key={article.id}>
          <p className="text-sm text-brand-light">
            <time dateTime={article.date}>{article.date}</time>
          </p>
          <button onClick={() => onSelectArticle(article)} className="block mt-2 text-left">
            <p className="text-xl font-semibold text-brand-dark hover:text-brand-accent transition-colors duration-200">{article.title}</p>
            <p className="mt-3 text-base text-brand-medium">{article.excerpt}</p>
          </button>
          <div className="mt-4">
            <button
              onClick={() => onSelectArticle(article)}
              className="text-base font-semibold text-brand-accent hover:text-brand-medium transition-colors duration-200"
            >
              Read full story
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
);

const ArticleDetailPage: React.FC<{
  article: Article;
  onBack: () => void;
}> = ({ article, onBack }) => (
  <div>
    <button
      onClick={onBack}
      className="text-base font-semibold text-brand-accent hover:text-brand-medium transition-colors duration-200 mb-8"
    >
      &larr; Back to Articles
    </button>
    <header>
      <h1 className="text-3xl font-serif font-bold text-brand-dark tracking-tight sm:text-4xl md:text-5xl">
        {article.title}
      </h1>
      <p className="mt-4 text-lg text-brand-light">
        By {article.author} &middot; {article.date}
      </p>
    </header>
    <div className="mt-10 prose prose-lg max-w-none text-brand-medium leading-relaxed space-y-6">
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </div>
);

const ArticlesPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {selectedArticle ? (
        <ArticleDetailPage 
          article={selectedArticle} 
          onBack={() => setSelectedArticle(null)} 
        />
      ) : (
        <ArticleListPage 
          onSelectArticle={(article) => setSelectedArticle(article)} 
        />
      )}
    </div>
  );
};

export default ArticlesPage;
