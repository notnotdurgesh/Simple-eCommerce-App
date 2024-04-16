import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto flex justify-between">
        <p className="text-white text-center">
         Made with ❤️
        </p>
        <p className="text-white text-center">
         <span className="text-purple-700 text-center font-semibold">
         { "<Esh />" }
         </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
