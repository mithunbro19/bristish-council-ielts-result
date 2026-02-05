import React from "react";
import "./ResultView.css";

const ResultView = ({ onBack }) => {
  const scoreData = [
    { label: "Listening", score: "8.0", icon: "👂" },
    { label: "Reading", score: "6.5", icon: "📖" },
    { label: "Writing", score: "7.0", icon: "✍️" },
    { label: "Speaking", score: "6.5", icon: "🗣️" },
  ];

  return (
    <div className="result-detail">
      {/* Header */}
      <header className="result-detail-header">
        <div className="result-bc-container">
          <div className="result-detail-header-left">
            <h2 className="result-detail-title">
              IELTS for UKVI Academic: 1 February 2026
            </h2>
            <p className="result-detail-subtitle">
              MD. MITHUN HOSSEN ZEHAD <br />
              British Council Dhaka
            </p>
          </div>

          <div className="result-detail-header-right">
            <p className="result-detail-meta">
              Reference: <strong>A4-BD001-C-14420768</strong>
            </p>
            <p className="result-detail-meta">
              TRF number: <strong>22BD010908AHMM001A</strong>
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

              <div className="result-detail-band-circle">7</div>

              <a href="#" className="result-detail-link">
                View full scores and <br /> explanation
              </a>
            
          </div>

          {/* Info Box */}
          <div className="result-detail-info-box">
            <div className="result-detail-info-box-triangle"></div>
            <div className="result-detail-info-text">
              This means you’re a “Good User”
              <div style={{marginTop: "8px"}}></div>
              The test taker has an operational command of the language, though with occasional inaccuracies, inappropriate usage, and misunderstandings in some situations. They generally handle complex language well and understand detailed reasoning. They can communicate effectively in most academic, professional, and social contexts.


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
              <span>7.0</span>
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
                  Test takers at Band {item.score} 8 can understand long and complex spoken English with a very high level of accuracy. They can easily follow fast speech, different accents, and detailed discussions in both academic and everyday situations. They are able to identify main ideas, supporting details, opinions, and implied meanings without difficulty. They can understand indirect language, speaker attitudes, and purpose clearly. They have strong short-term memory, which helps them remember important information from long recordings. They can deal confidently with unfamiliar topics and rarely misunderstand what they hear.
                </p>

                <div className="result-detail-score-explanation-how-to-improve">
                  <p className="result-detail-score-explanation-improve-title">
                    How to improve:
                  </p>
                  <p className="result-detail-score-explanation-improve-text">
                    Continue practicing with advanced-level listening materials such as Cambridge IELTS tests, BBC programs, and TED Talks. Listen regularly to different English accents including British, American, and Australian. Before listening, read the questions carefully and try to predict the type of answer needed. Improve your vocabulary, especially academic and topic-based words. Focus on understanding paraphrasing, as the same idea is often expressed using different words. Practice under exam conditions without pausing the audio and work on reducing spelling and grammar mistakes. Review your mistakes after each practice test and learn from them to improve accuracy and concentration.
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
