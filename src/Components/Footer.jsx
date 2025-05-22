import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-900 to-green-800 text-white font-read mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold font-logo mb-3">Contact Info</h3>
          <p>Email: support@leaflink.com</p>
          <p>Phone: +880987654321</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div >

        {/* Terms and Policies */}
        <div>
          <h3 className="text-xl font-semibold mb-3 font-logo">Terms</h3>
          <ul className="space-y-2">
            <li><a href="https://policies.google.com/terms?hl=en-US" target="_blank" className="hover:underline hover:text-amber-200 transition">Terms of Service</a></li>
            <li><a href="https://www.google.com/policies/privacy/archive/20010104-20040701/" target="_blank" className="hover:underline hover:text-amber-200 transition">Privacy Policy</a></li>
            <li><a href="https://policies.google.com/technologies/cookies?hl=en-US" target="_blank" className="hover:underline hover:text-amber-200 transition">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="https://www.facebook.com/"  target="_blank"  className="hover:text-amber-300 transition"><FaFacebook /></a>
            <a href="https://x.com/"  target="_blank"  className="hover:text-amber-300 transition"><FaTwitter /></a>
            <a href="https://www.instagram.com/"  target="_blank"  className="hover:text-amber-300 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 text-center py-4 text-sm opacity-75">
        © {new Date().getFullYear()} LeafLink — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
