import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Header from './Components/Header';
import MathArticles from './Components/MathArticles';
import SearchBar from './Components/SearchBar';

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
        <Route
          path="/mathArticles" element={<MathArticles searchTerm={searchTerm} />}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
