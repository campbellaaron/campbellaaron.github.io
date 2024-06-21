import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <p>Copyright &copy; {year} Aaron W. Campbell</p>
    </footer>
  );
};

export default Footer;