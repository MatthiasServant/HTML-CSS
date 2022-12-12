import React from "react";

const articles = [
  {
    title: "Titre de l'article 1",
    image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
    subtitle: "Sous-titre de l'article 1",
    date: new Date("2021-01-01"),
    content: "Contenu de l'article 1",
  },
  {
    title: "Titre de l'article 2",
    image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
    subtitle: "Sous-titre de l'article 2",
    date: new Date("2021-01-01"),
    content: "Contenu de l'article 2",
  },
  {
    title: "Titre de l'article 3",
    image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
    subtitle: "Sous-titre de l'article 3",
    date: new Date("2021-01-01"),
    content: "Contenu de l'article 3",
  }
];

const ArticleList = () => {
  return (
    <ul>
      {articles.map(article => (
        <li>
          <h1>{article.title}</h1>
          <img src={article.image} alt={article.title} />
          <h2>{article.subtitle}</h2>
          <p>{article.date.toLocaleDateString()}</p>
          <p>{article.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;