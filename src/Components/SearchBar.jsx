import { useState } from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [isActive, setIsActive] = useState(false);

  function handleFocus() {
    setIsActive(true);
  }

  function handleBlur() {
    if (!searchTerm) {
      setIsActive(false);
    }
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="cntr">
      <div className="cntr-innr">
        <label className={`search ${isActive ? "active" : ""}`}>
          <input
            id="inpt_search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
      </div>
    </div>
  );
}
