import React from "react";
import ShowArticle from './ShowArticle'


const articles = [
  {
    title: "Titre de l'article 1",
    image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
    subtitle: "Sous-titre de l'article 1",
    date: new Date("2021-01-01"),
    content: "Contenu de l'article 1",
    published: true,
  },
  {
    title: "Titre de l'article 2",
    image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
    subtitle: "Sous-titre de l'article 2",
    date: new Date("2021-01-01"),
    content: "Contenu de l'article 2",
    published: true,
  },
  {
    title: "Titre de l'article 3",
    image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
    subtitle: "Sous-titre de l'article 3",
    date: new Date("2021-01-01"),
    content: "Contenu de l'article 3",
    published: false,
  }
];

const publishedArticles = articles.filter(
    (article) => article.published === true
);

const ListArticles = () => {
  return (
    <div>
        {publishedArticles.map((article) => {
            return(
                <ShowArticle currentArticle={article} />
            )
        })}
    </div>
  )
};

export default ListArticles;


// séparer le composant Articles en deux composants : un composant ListArticles et un composant ShowArticle

// le composant ListArticles s'occupe uniquement de récupérer les articles sur une api (ici juste créer la variable articles, donc un fake appel d'api)

// il faut la boucle sur tous les articles

// pour chaque article, on utilise un composant ShowArticle dont l'unique rôle est d'afficher un seul article