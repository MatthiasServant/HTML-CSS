import React from "react";

const ShowArticle = (props) => {
    const article = props.currentArticle;
    return (
      <ul>
          <li>
            <h1>{article.title}</h1>
            <img src={article.image} alt={article.title} />
            <h2>{article.subtitle}</h2>
            <p>{article.date.toLocaleDateString()}</p>
            <p>{article.content}</p>
          </li>
      </ul>
    );
  };
  
  export default ShowArticle;
  
  