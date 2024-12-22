import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-stone-50 pb-4 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <p className="my-6 text-gray-500">
          This website is best viewed on desktop.
        </p>

        <span className="text-sm text-gray-500 sm:text-center">
          © 2024 Hajoon Park All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
