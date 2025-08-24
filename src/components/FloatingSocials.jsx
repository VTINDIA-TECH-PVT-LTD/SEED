// FloatingSocial.jsx
import React from 'react';
import { FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { SiX } from "react-icons/si";

export default function FloatingSocials() {
  return (
    <div className="floating-social">
      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook">
        <FaFacebookF />
      </a>
      <a href="https://wa.me/919437314152" target="_blank" rel="noreferrer" className="whatsapp">
        <FaWhatsapp />
      </a>
      <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="social-icon x">
        <SiX />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer" className="youtube">
        <FaYoutube />
      </a>
    </div>
  );
}
