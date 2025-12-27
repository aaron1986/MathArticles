import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function MathArticles({ searchTerm }) {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    fetch("src/assets/Excel_Files/MathArticles.csv")
      .then((response) => response.text())
      .then((csvText) => {
        const workbook = XLSX.read(csvText, { type: "string" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        setArticles(jsonData);
        setFilteredArticles(jsonData);
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
        {filteredArticles.map((article, index) => (
          <div className="article_card" key={index}>
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
        ))}

        {filteredArticles.length === 0 && (
          <p>No articles found.</p>
        )}
      </div>
    </>
  );
}
