import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="ij__blog-container_article">
    <div className="ij__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="ij__blog-container_article-content">
      <div>
        <h3>{text}</h3>
      </div>
      <p>Explore Works</p>
    </div>
  </div>
);

export default Article;
