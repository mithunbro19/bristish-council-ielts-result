import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import ResultView from "./components/ResultView";
import HomeSecondHeader from "./components/HomeSecondHeader";
import SignInPage from "./components/SignInPage";

export default function App() {
  const [showDetail, setShowDetail] = useState(false);
  // 1. Add this state to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // If NOT logged in, show ONLY the SignInPage
  if (!isLoggedIn) {
    return <SignInPage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  // If logged in, show the main application
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
