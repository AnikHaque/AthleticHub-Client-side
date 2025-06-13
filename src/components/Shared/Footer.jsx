import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // or use Font Awesome

export default function Footer() {
  return (
    <footer className="bg-[#313f2a] text-white py-8 px-4 mt-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Adventis</h2>
          <p className="text-sm">
            Your trusted platform for athletic event management.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="hover:text-blue-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="hover:text-blue-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="hover:text-blue-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="hover:text-blue-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-blue-500 pt-4">
        © {new Date().getFullYear()} Adventis . All rights reserved.
      </div>
    </footer>
  );
}
