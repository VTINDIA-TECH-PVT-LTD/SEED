import { useState } from "react";
import { Link } from "react-router-dom";
import seedLogo from "../assets/img/logo.svg"; // adjust your path

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // toggle submenu by index
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div className={`th-menu-wrapper ${menuOpen ? "th-body-visible" : ""}`}>
      <div className="th-menu-area text-center">
        {/* Burger toggle */}
        <button
          className="th-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fal fa-times"></i>
        </button>

        {/* Logo */}
        <div className="mobile-logo">
          <Link to="/">
            <img src={seedLogo} alt="SEED Logo" className="w-32" />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="th-mobile-menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>

            {/* About Us submenu */}
            <li className={`menu-item-has-children ${openSubMenu === 0 ? "th-active" : ""}`}>
              <button onClick={() => toggleSubMenu(0)} className="submenu-btn">
                About Us
              </button>
              <ul className={`sub-menu ${openSubMenu === 0 ? "th-open" : ""}`}>
                <li><Link to="/about/overview">Overview</Link></li>
                <li><Link to="/about/vision-mission">Vision & Mission</Link></li>
                <li><Link to="/about/registration">Registration Details</Link></li>
                <li><Link to="/about/team">Team & Members</Link></li>
              </ul>
            </li>

            {/* Programs */}
            <li className={`menu-item-has-children ${openSubMenu === 1 ? "th-active" : ""}`}>
              <button onClick={() => toggleSubMenu(1)} className="submenu-btn">
                Programs & Activities
              </button>
              <ul className={`sub-menu ${openSubMenu === 1 ? "th-open" : ""}`}>
                <li><Link to="/programs/human-rights">Human Rights Awareness</Link></li>
                <li><Link to="/programs/swachh-bharat">Swachh Bharat Abhiyan</Link></li>
                <li><Link to="/programs/women-empowerment">Women Empowerment</Link></li>
                <li><Link to="/programs/skill-development">Skill Development</Link></li>
                <li><Link to="/programs/cultural">Cultural Programs</Link></li>
                <li><Link to="/programs/education-scst">Education for SC/ST Girls</Link></li>
                <li><Link to="/programs/environment">Environment Awareness</Link></li>
                <li><Link to="/programs/sports">Sports Development</Link></li>
                <li><Link to="/programs/health-camps">Health Camps</Link></li>
              </ul>
            </li>

            <li><Link to="/annual">Annual Reports</Link></li>

            {/* Gallery */}
            <li className={`menu-item-has-children ${openSubMenu === 2 ? "th-active" : ""}`}>
              <button onClick={() => toggleSubMenu(2)} className="submenu-btn">
                Gallery
              </button>
              <ul className={`sub-menu ${openSubMenu === 2 ? "th-open" : ""}`}>
                <li><Link to="/gallery/photos">Photos</Link></li>
                <li><Link to="/gallery/videos">Videos</Link></li>
              </ul>
            </li>

            <li><Link to="/annual">News & Events</Link></li>

            {/* Get Involved */}
            <li className={`menu-item-has-children ${openSubMenu === 3 ? "th-active" : ""}`}>
              <button onClick={() => toggleSubMenu(3)} className="submenu-btn">
                Get Involved
              </button>
              <ul className={`sub-menu ${openSubMenu === 3 ? "th-open" : ""}`}>
                <li><Link to="/get-involved/volunteer">Volunteer</Link></li>
                <li><Link to="/get-involved">Donate</Link></li>
                <li><Link to="/get-involved/partnership">Partnership</Link></li>
              </ul>
            </li>

            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
