import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bc-footer">
      <div className="bc-container bc-footer__inner">
        <div className="bc-footer__links">
          <a href="#">Terms of use</a>
          <a href="#">Accessibility</a>
          <a href="#">Privacy and cookies</a>
          <a href="#">Data Protection</a>
        </div>

        <p className="bc-footer__text">
          © 2026 British Council
          <br />
          The United Kingdom&apos;s international organisation for cultural
          relations and educational opportunities.
        </p>
      </div>
    </footer>
  );
}
