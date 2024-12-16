export default function Header() {
    return (
      <nav className="navbar">
      <div className="navbar-nav">
        {/* Logo */}
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" className="logo-img" />
        </div>

        {/* Navigation Links */}
        <ul className="nav-links poppins-semibold">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
    );
  }
  