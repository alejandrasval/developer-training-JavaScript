import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-footer">
      <footer>
        <FaTwitterSquare className="icon-social-media" />
        <FaFacebookSquare className="icon-social-media" />
        <FaInstagramSquare className="icon-social-media" />
        <FaGithubSquare className="icon-social-media" />
      </footer>
    </div>
  );
};

export default Footer;
