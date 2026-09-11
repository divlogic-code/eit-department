import "./Footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <p>
            © 2026 All Rights Reserved by{" "}
            <strong>Echelon Institute of Technology</strong>
          </p>
        </div>

        <div className="footer-right">

          <a
            href="https://www.instagram.com/echeloninstituteoftechnology/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.linkedin.com/school/echelon-institute-of-technology/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="https://www.youtube.com/@echeloninstituteoftechnology"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;