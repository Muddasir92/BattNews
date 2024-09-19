import React, { useState } from "react";

function Navbar(props) {
  const [search, setSearch] = useState("");
  const [activeLink, setActiveLink] = useState(""); // State to keep track of the active link

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleNavClick(link) {
    // console.log(link," console link")
    setActiveLink(link); // Set the active link on click
    props.onChecked(link)
  }

  return (
    <div className="nave">
      <div className="head">
        <div className="header">
          <h1>Batt News</h1>
        </div>
        <div className="searchBar">
          <input
            type="text"
            value={search}
            placeholder="Search News"
            onChange={handleChange}
          />
          <button
            className="search_btn"
            onClick={() => {
              props.onChecked(search);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <hr />
      <div className="newslinks">
        <ul className="newsLinks">
          {[
            "Home",
            "Latest",
            "Pakistan",
            "World",
            "Sports",
            "Wars",
            "Fashion",
            "Facts",
          ].map((link) => (
            <li
              key={link}
              id="newsItem"
              className={`newsLink ${activeLink === link ? "active" : ""}`} // Apply 'active' class when the link is clicked
              onClick={() => handleNavClick(link)}
            >
              <a
                href="#"
                className={`newsLink ${activeLink === link ? "active" : ""}`} // Apply 'active' class when the link is clicked
                onClick={() => handleNavClick(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
