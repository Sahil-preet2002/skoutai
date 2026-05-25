import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import "./footer.css";

// Navigation columns – keep in sync with the header
const navCols = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/solutions", label: "Solutions" },
      { to: "/integrations", label: "Integrations" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact" },
      { to: "/coming-soon", label: "Careers" },
    ],
  },
];

// Social links – Instagram and LinkedIn only
const socialLinks = [
  {
    href: "https://instagram.com/yourhandle",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.307 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.307 3.608-.975.975-2.242 1.245-3.608 1.307-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.307-.975-.975-1.245-2.242-1.307-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.307-3.608.975-.975 2.242-1.245 3.608-1.307 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.015 7.052.072 5.77.13 4.662.425 3.757 1.33c-.904.904-1.2 2.012-1.258 3.294C2.015 5.668 2 6.077 2 9.334v5.332c0 3.258.015 3.667.072 4.948.058 1.282.353 2.39 1.258 3.294.904.904 2.012 1.2 3.294 1.258C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.072c1.282-.058 2.39-.353 3.294-1.258.904-.904 1.2-2.012 1.258-3.294.057-1.281.072-1.69.072-4.948V9.334c0-3.257-.015-3.666-.072-4.948-.058-1.282-.353-2.39-1.258-3.294-.904-.904 2.012-1.2-3.294-1.258C15.668.015 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.028-3.154-1.923-3.154-1.924 0-2.219 1.503-2.219 3.053v5.601h-3v-10h2.879v1.367h.04c.401-.76 1.381-1.562 2.842-1.562 3.041 0 3.603 2.001 3.603 4.603v5.592z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image src={logo} alt="AI Skout" className="h-9 w-auto" priority />
          </Link>
          <p className="footer-tagline">
            The unified B2B revenue intelligence platform. Find, verify, reach — without juggling
            five tools.
          </p>
          <div className="footer-status">
            <span className="status-dot"></span>
            <span className="status-text">All systems operational</span>
          </div>
        </div>

        <div className="footer-nav">
          {navCols.map((col) => (
            <div key={col.title} className="footer-col">
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-links">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link href={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-social-col">
          <h4 className="footer-col-title">Connect</h4>
          <div className="footer-social">
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AI Skout Inc. All rights reserved.</p>
        <p className="footer-policies">GDPR · CCPA · SOC 2 Type II</p>
      </div>
    </footer>
  );
}
