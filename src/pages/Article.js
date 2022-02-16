import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";

export const Article = ({ match }) => {
  const { name } = useParams();
  console.log(name);
  const article = articles.find((article) => article.name === name);
  if (!article)
    return (
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
        Article does not exists
      </h1>
    );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {" "}
          {paragraph}
        </p>
      ))}
    </>
  );
};
