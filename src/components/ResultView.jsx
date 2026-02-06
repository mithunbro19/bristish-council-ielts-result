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

           <div className="result-detail-score-explanation-card">
  <div className="result-detail-score-explanation-header">
    <div className="result-detail-score-explanation-left">
      <div className="result-detail-score-explanation-icon">👂</div>
      Listening
    </div>
    <span className="result-detail-score-explanation-value">8.0</span>
  </div>
  <p className="result-detail-score-explanation-text">
   Test takers at Band 8 can understand long and complex spoken English with a very high level of accuracy. They can easily follow fast speech, different accents, and detailed discussions in both academic and everyday situations. They are able to identify main ideas, supporting details, opinions, and implied meanings without difficulty. They can understand indirect language, speaker attitudes, and purpose clearly. They have strong short-term memory, which helps them remember important information from long recordings. They can deal confidently with unfamiliar topics and rarely misunderstand what they hear.
  </p>
  <div className="result-detail-score-explanation-how-to-improve">
    <p className="result-detail-score-explanation-improve-title">How to improve:</p>
    <p className="result-detail-score-explanation-improve-text">
      Continue practicing with advanced-level listening materials such as Cambridge IELTS tests, BBC programs, and TED Talks. Listen regularly to different English accents including British, American, and Australian. Before listening, read the questions carefully and try to predict the type of answer needed. Improve your vocabulary, especially academic and topic-based words. Focus on understanding paraphrasing, as the same idea is often expressed using different words. Practice under exam conditions without pausing the audio and work on reducing spelling and grammar mistakes. Review your mistakes after each practice test and learn from them to improve accuracy and concentration.
    </p>
  </div>
</div>

<div className="result-detail-score-explanation-card">
  <div className="result-detail-score-explanation-header">
    <div className="result-detail-score-explanation-left">
      <div className="result-detail-score-explanation-icon">📖</div>
      Reading
    </div>
    <span className="result-detail-score-explanation-value">6.5</span>
  </div>
  <p className="result-detail-score-explanation-text">
   Test takers at Band 6.5 can understand the main ideas and most important details in a range of texts on familiar and some unfamiliar topics. They are able to locate specific information and make basic inferences from the reading passages. They show a reasonable understanding of vocabulary and can usually follow the writer’s purpose and opinions. However, they may sometimes struggle with complex sentences, difficult vocabulary, or highly academic texts. Occasional misunderstanding of details or paraphrased information may occur, which can affect accuracy.


  </p>
  <div className="result-detail-score-explanation-how-to-improve">
    <p className="result-detail-score-explanation-improve-title">How to improve:</p>
    <p className="result-detail-score-explanation-improve-text">
      To improve from Band 6.5, practice reading a wide variety of texts such as newspapers, academic articles, and IELTS reading passages. Work on improving skimming and scanning skills to find information quickly. Develop your vocabulary, especially academic and topic-related words. Focus on understanding paraphrasing and synonyms, as IELTS rarely uses the same words as the questions. Practice managing your time effectively and avoid spending too long on one question. Review your mistakes carefully and learn why each answer was wrong to improve comprehension and accuracy.
    </p>
  </div>
</div>

<div className="result-detail-score-explanation-card">
  <div className="result-detail-score-explanation-header">
    <div className="result-detail-score-explanation-left">
      <div className="result-detail-score-explanation-icon">✍️</div>
      Writing
    </div>
    <span className="result-detail-score-explanation-value">7.0</span>
  </div>
  <p className="result-detail-score-explanation-text">
   Test takers at Band 7 can write clear and well-organized responses and address all parts of the task. They present ideas logically and use paragraphs effectively. They show good control of grammar and vocabulary, and they can use a range of sentence structures with some flexibility. They are able to express opinions and explain ideas clearly, although occasional errors in grammar, word choice, or sentence structure may occur. These mistakes do not usually affect communication. They can use some complex language, but it may not always be accurate.


  </p>
  <div className="result-detail-score-explanation-how-to-improve">
    <p className="result-detail-score-explanation-improve-title">How to improve:</p>
    <p className="result-detail-score-explanation-improve-text">
      To improve from Band 7, focus on developing more precise and varied vocabulary and using complex sentences more accurately. Practice writing Task 1 and Task 2 essays regularly under time limits. Pay attention to task response and make sure every question is fully answered. Improve coherence by using linking words and clear topic sentences. Review your writing carefully to reduce grammatical errors and repetition. Learn to use examples and explanations more effectively to support your ideas. Check model answers and analyze high-band essays to understand better structure and language use.


   </p>
  </div>
</div>

<div className="result-detail-score-explanation-card">
  <div className="result-detail-score-explanation-header">
    <div className="result-detail-score-explanation-left">
      <div className="result-detail-score-explanation-icon">🗣️</div>
      Speaking
    </div>
    <span className="result-detail-score-explanation-value">6.5</span>
  </div>
  <p className="result-detail-score-explanation-text">
    Test takers at Band 6.5 can communicate clearly in most everyday and familiar situations. They are able to express ideas and opinions with reasonable clarity and can take part in discussions without much difficulty. They use a mix of simple and some complex sentence structures and have an adequate range of vocabulary for most topics. However, they may sometimes hesitate, repeat themselves, or search for words, especially when discussing unfamiliar or abstract topics. Occasional grammatical and pronunciation errors may occur, but these usually do not seriously affect understanding.


  </p>
  <div className="result-detail-score-explanation-how-to-improve">
    <p className="result-detail-score-explanation-improve-title">How to improve:</p>
    <p className="result-detail-score-explanation-improve-text">
     To improve from Band 6.5, practice speaking English regularly in real-life and exam-style situations. Work on increasing fluency by speaking for longer periods without pausing too much. Expand your vocabulary, especially for common IELTS topics such as education, technology, environment, and health. Focus on improving pronunciation, word stress, and intonation. Try to use more complex sentence structures accurately and avoid repeating the same words and ideas. Record your speaking practice and analyze your mistakes. Practice with mock tests and get feedback to build confidence and improve performance.


    </p>
  </div>
</div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default ResultView;
