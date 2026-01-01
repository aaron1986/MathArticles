import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/MathArticles.csv")
      .then((res) => res.text())
      .then((csvText) => {
        const workbook = XLSX.read(csvText, { type: "string" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const articlesWithId = jsonData.map((a, index) => ({
          ...a,
          id: index
        }));

        const found = articlesWithId.find(
          (a) => a.id === Number(id)
        );

        setArticle(found);
      });
  }, [id]);

  if (!article) {
    return <p>Loading article...</p>;
  }

  return (
    <div className="article_page">
      <h1>{article.Titles}</h1>

      {article["Image Link"] && (
        <img
          src={article["Image Link"]}
          alt={article.Titles}
          className="card_image"
        />
      )}

      <p className="article_page_description">
        {article.Description}
      </p>

      <div>
        <button onClick={() => navigate(-1)} className="button-29">Go Back</button>
      </div>
    </div>

  );
}
