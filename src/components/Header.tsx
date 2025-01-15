"use client";

import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="brand">
          <Building2 className="brand-logo" />
          <span className="brand-name">SecureBank</span>
        </div>

        <nav className="main-nav">
          {navLinks?.map((navLink, index) => (
            <div key={index}>
              <Link
                href={navLink.href}
                className={`nav-link ${pathname === navLink.href ? "nav-active" : ""}`}
              >
                {navLink.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="header-buttons">
          <Link href={`/register`}>
            {" "}
            <Button variant="outline" color="--primary-color" type="button">
              Get Started
            </Button>
          </Link>

          <Link href={`/login`}>
            <Button variant="solid" color="--primary-color" type="button">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
