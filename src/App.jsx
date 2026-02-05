import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import ResultView from "./components/ResultView";
import HomeSecondHeader from "./components/HomeSecondHeader";

export default function App() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="bc-app">
      <Header />
      <HomeSecondHeader />

      <main className="bc-main">
        {!showDetail ? (
          <>
            <Hero />
            <Cards onShowResult={() => setShowDetail(true)} />
          </>
        ) : (
          <ResultView onBack={() => setShowDetail(false)} />
        )}
      </main>

      <Footer />
    </div>
  );
}
