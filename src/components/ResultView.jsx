import React from "react";
import "./ResultView.css";

const ResultView = ({ onBack }) => {
  const scoreData = [
    { label: "Listening", score: "5.0", icon: "👂" },
    { label: "Reading", score: "4.0", icon: "📖" },
    { label: "Writing", score: "5.0", icon: "✍️" },
    { label: "Speaking", score: "5.5", icon: "🗣️" },
  ];

  return (
    <div className="result-detail">
      {/* Header */}
      <header className="result-detail-header">
        <div className="result-bc-container">
          <div className="result-detail-header-left">
            <h2 className="result-detail-title">
              IELTS for UKVI Academic: 14 January 2023
            </h2>
            <p className="result-detail-subtitle">
              MD. NUMAN AHMED <br />
              British Council Sylhet
            </p>
          </div>

          <div className="result-detail-header-right">
            <p className="result-detail-meta">
              Reference: <strong>A4-BD001-P-8790589</strong>
            </p>
            <p className="result-detail-meta">
              TRF number: <strong>22BD050908AHMM001A</strong>
            </p>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <nav className="result-detail-tabs">
        {["Date & location", "Test Taker", "Results", "Recognising Organisations", "Payments"].map((tab, index) => (
          <a
            key={index}
            href="#"
            className={`result-detail-tab ${index === 2 ? "active" : ""}`}
          >
            {tab}
          </a>
        ))}
      </nav>

      {/* Main */}
      <main className="result-detail-main">

        {/* Band Score Card */}
        <div className="result-detail-band-card">
          <div className="result-detail-band-card-inner">
            
              <p className="result-detail-band-title">
                Your overall band <br /> score
              </p>

              <div className="result-detail-band-circle">5</div>

              <a href="#" className="result-detail-link">
                View full scores and <br /> explanation
              </a>
            
          </div>

          {/* Info Box */}
          <div className="result-detail-info-box">
            <div className="result-detail-info-box-triangle"></div>
            <div className="result-detail-info-text">
              This means you’re a “Modest User”
              <div style={{marginTop: "8px"}}></div>
              The test taker has a partial command of the language and copes with overall meaning in most situations, although they are likely to make many mistakes. They should be able to handle basic communication in their own field.
            </div>
          </div>

          {/* Divider */}
          <div className="result-detail-divider" />
        </div>

        <div style={{padding: "0 30px 30px"}}>

          {/* Full Score List */}
          <h2 className="result-detail-full-score-title">
            Your full score and explanation
          </h2>

          <div className="result-detail-full-score-list">
            {scoreData.map((item, index) => (
              <div key={index} className="result-detail-score-item">
                <div className="result-detail-score-left">
                  <span className="result-detail-score-icon">{item.icon}</span>
                  {item.label}
                </div>
                <strong className="result-detail-score-value">{item.score}</strong>
              </div>
            ))}

            {/* Overall Row */}
            <div className="result-detail-score-item result-detail-score-overall">
              <span>Your overall band score</span>
              <span>5.0</span>
            </div>
          </div>

          {/* Scores Explained */}
          <div className="result-detail-scores-explained">
            <h2 className="result-detail-scores-explained-title">
              Your scores explained:
            </h2>

            {scoreData.map((item, index) => (
              <div
                key={index}
                className="result-detail-score-explanation-card"
              >
                <div className="result-detail-score-explanation-header">
                  <div className="result-detail-score-explanation-left">
                    <div className="result-detail-score-explanation-icon">
                      {item.icon}
                    </div>
                    {item.label}
                  </div>

                  <span className="result-detail-score-explanation-value">
                    {item.score}
                  </span>
                </div>

                <p className="result-detail-score-explanation-text">
                  Test takers at Band {item.score} typically have a limited ability
                  to deal with straightforward factual and opinion-based texts.
                  Their ability to understand meaning is generally within sentences
                  rather than across sentences.
                </p>

                <div className="result-detail-score-explanation-how-to-improve">
                  <p className="result-detail-score-explanation-improve-title">
                    How to improve:
                  </p>
                  <p className="result-detail-score-explanation-improve-text">
                    Continue practising regularly by using everyday materials such
                    as news, podcasts, and short texts. Focus on improving
                    vocabulary and understanding meaning beyond individual
                    sentences.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default ResultView;
