import React from 'react';
import HashLogo from './assets/footer.svg';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <img src={HashLogo} alt="" />
        <p>Copyright &copy; {footerYear} all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
