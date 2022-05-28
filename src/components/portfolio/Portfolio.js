import React from "react";
import Header from "../header/Header";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import "./Portfolio.scss";
import Portfolio1 from "../../assets/images/react.jpg";
import Portfolio2 from "../../assets/images/ui.jpg";
import Portfolio3 from "../../assets/images/wd.jpg";
import Portfolio4 from "../../assets/images/wd2.jpg";
import Portfolio5 from "../../assets/images/wd3.jpg";
import Portfolio6 from "../../assets/images/wd4.jpg";
import {Loader} from 'react-loaders'
const Portfolio = () => {
  return (
      <>
    <div className="portfolio">
      <Header
        headerText="Portfolio"
        icon={<BsFillJournalBookmarkFill size={40} />}
      />

      <div className="portfolio-container">
        <span className="filter">Toggle portfolio filter</span>
        <div className="portfolio-cards">
          <div className="card">
            <img src={Portfolio1} alt="Portfolio 1" />
            <div className="card_details">
              <h3>Amazon Clone</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>Link</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>&lt;/Code&gt;</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={Portfolio2} alt="Portfolio 2" />
            <div className="card_details">
              <h3>Amazon Clone</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>Link</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>&lt;/Code&gt;</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={Portfolio3} alt="Portfolio 3" />
            <div className="card_details">
              <h3>Amazon Clone</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>Link</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>&lt;/Code&gt;</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={Portfolio4} alt="Portfolio 4" />
            <div className="card_details">
              <h3>Amazon Clone</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>Link</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>&lt;/Code&gt;</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={Portfolio5} alt="Portfolio 5" />
            <div className="card_details">
              <h3>Amazon Clone</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>Link</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>&lt;/Code&gt;</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={Portfolio6} alt="Portfolio 6" />
            <div className="card_details">
              <h3>Amazon Clone</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>Link</button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-thomson97/"
              >
                <button>&lt;/Code&gt;</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  );
};

export default Portfolio;
