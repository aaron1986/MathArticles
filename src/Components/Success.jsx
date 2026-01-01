import { useNavigate } from "react-router-dom";
export default function Success() {
  const navigate = useNavigate();
    return (
          <div>
            <div className="article_title">Thank you!</div>
            <p>Your message has been sent successfully.</p>
            <div>
             <button onClick={() => navigate("/")}>
            Return Home
          </button>
            </div>
          </div>

    )
}