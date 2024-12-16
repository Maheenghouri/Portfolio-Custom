export default function footer() {
  return (
    <section className="contact-section">
      <div className="container">

        <h2 className="contact-title poppins-bold">Contact</h2>


        <p className="contact-description poppins-light ">
          I worked as a web developer at ABC Company, where I created user-friendly, responsive, and visually appealing websites.
           I focused on delivering seamless experiences that brought ideas to life and improved overall functionality for clients.
        </p>


        <div className="contact-email">
          <span className="email-icon">📧</span>
          <a href="mailto:khi.ghouri021@gmail.com" className="email-link poppins-semibold">
            khi.ghouri021@gmail.com
          </a>
        </div>


        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/x.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/youtube.png" alt="YouTube" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}