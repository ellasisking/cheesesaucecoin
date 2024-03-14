import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="social-media-icons">
      {/* Twitter Icon */}
      <a
        href="https://twitter.com/CheeseSauceCoin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      {/* Telegram Icon */}
      <a
        href="https://t.me/+WQtzOYBcD0JjMDkx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram />
      </a>
    </div>
  );
};

export default Socials;
