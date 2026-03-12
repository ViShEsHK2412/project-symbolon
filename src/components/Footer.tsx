export function Footer() {
  return (
    <footer id="footer" className="site-footer" aria-label="Site Footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">S</span>
          <span className="footer-text">
            SYMBOLON © {new Date().getFullYear()}
          </span>
        </div>
        <nav className="footer-links" aria-label="Footer Navigation">
          <a href="#privacy" className="footer-link">
            Privacy Policy
          </a>
          <a href="#terms" className="footer-link">
            Terms of Service
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
