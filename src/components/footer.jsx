import React from "react";
import Copyrights from "./copyrights";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="section">
        <h2>Section</h2>
        <ul>
          <li>Home</li>
          <li>Latest</li>
          <li>Pakistan</li>
          <li>World</li>
          <li>Sports</li>
          <li>Entertainment</li>
          <li>Business</li>
          <li>Health</li>
          <li>Amazing</li>
          <li>Sci-Tech</li>
          <li>Life Style</li>
        </ul>
      </div>
      <div className="section">
        <h2>About</h2>
        <p>
          Welcome to <b>Batt News</b>, your reliable source for breaking news,
          insightful analysis, and updates on politics, sports, business, and
          more. Stay informed with accurate, diverse, and real-time news
          coverage.
        </p>
      </div>
      <div className="section" id="findus">
        <h2>Find Us</h2>
        <ul>
          <li>
            <a href="">
              <i className="fab fa-facebook"></i>
              Facebook
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-x"></i>
              x
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-youtube"></i>
              Youtube
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-snapchat"></i>
              Snapchat
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
