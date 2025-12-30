import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

export default function MathArticles({ searchTerm }) {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

useEffect(() => {
  fetch("/MathArticles.csv")
    .then((response) => {
      if (!response.ok) {
        throw new Error("CSV not found");
      }
      return response.text();
    })
.then((csvText) => {
  const workbook = XLSX.read(csvText, { type: "string" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
    const articlesWithId = jsonData.map((article, index) => ({
    ...article,
    id: index
  }));

  setArticles(articlesWithId);
  setFilteredArticles(articlesWithId);
    })
    .catch((err) => console.error("Error loading CSV:", err));
}, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredArticles(articles);
      return;
    }

    const lowerSearch = searchTerm.toLowerCase();

    const results = articles.filter((article) =>
      article.Titles?.toLowerCase().includes(lowerSearch) ||
      article.Description?.toLowerCase().includes(lowerSearch)
    );

    setFilteredArticles(results);
  }, [searchTerm, articles]);

  return (
    <>
      <div className="article_title">Math Articles</div>

      <div className="articles_grid">
        {filteredArticles.map((article) => (
  <Link
    to={`/articles/${article.id}`}
    className="article_link"
    key={article.id}
  >
    <div className="article_card">
      {article["Image Link"] && (
        <img
          className="card_image"
          src={article["Image Link"]}
          alt={article.Titles}
        />
      )}
      <h2 className="article_heading">{article.Titles}</h2>
      <p className="article_description">{article.Description}</p>
    </div>
  </Link>
))}


        {filteredArticles.length === 0 && (
          <p>No articles found.</p>
        )}
      </div>
    </>
  );
}
