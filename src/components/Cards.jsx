import React from "react";
import "./Cards.css";

export default function Cards({ onShowResult }) {
  return (
    <section className="bc-section">
      <div className="bc-card-section">
        {/* Upcoming Tests */}
        <h2 className="bc-h2">Your upcoming tests</h2>

        <div className="bc-panel">
          <p className="bc-muted mb-12">You don’t have any upcoming tests</p>
          <button className="bc-btn bc-btn--primary" type="button">
            Book a new test
          </button>
        </div>

        <div className="bc-divider" />

        {/* Previous Tests */}
        <h2 className="bc-h2">Your previous tests & scores</h2>

        <div className="bc-card bc-card--result">
          <div className="bc-card__left">
            <a className="bc-link" href="#">
              IELTS for UKVI Academic
            </a>

            <div className="bc-meta">
              <span>1 February 2026</span>
              <span aria-hidden="true">•</span>
              <span>IELTS on computer</span>
              <span aria-hidden="true">•</span>
              <span>Dhaka</span>
            </div>

            <button
              onClick={onShowResult}
              className="bc-btn bc-btn--outline"
              type="button"
            >
              See full result
            </button>
          </div>

          <div className="bc-card__right">
            <p className="bc-muted mb-10">Overall band score</p>
            <div className="bc-score" aria-label="Overall band score 7">
              7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
