import "./footer.scss";

export default function footer() {
  return (
    <div className="footer">
      <p>
        <a href="" className="footer-text">
          About us
        </a>
      </p>
      <p>
        <a href="" className="footer-text">
          Terms and Conditions
        </a>
      </p>
      <p>
        <a href="artisanbridge688@gmail.com" className="footer-text">
          Contact us
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
          className="footer-text"
        >
          <img src="images/linkedin.png" alt="" className="footer-img" />
        </a>
        <a href="https://web.facebook.com/" className="footer-text">
          <img src="images/facebook.png" alt="" className="footer-img" />
        </a>
        <a href="https://github.com/" className="footer-text">
          <img src="images/github.png" alt="" className="footer-img" />
        </a>
      </p>
    </div>
  );
}
