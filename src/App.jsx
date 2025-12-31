import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css'
import Header from './Components/Header';
import MathArticles from './Components/MathArticles';
import SearchBar from './Components/SearchBar';
import Contact from './Components/Contact';
import About from './Components/About';
import ArticlePage from './Components/ArticlePage';
import Success from './Components/Success';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Router>
        <Header /> 
        <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
        <Routes>
        <Route path="/" element={<Navigate to="/mathArticles" />} />
        <Route path="/mathArticles" element={<MathArticles searchTerm={searchTerm} />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
