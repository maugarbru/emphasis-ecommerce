import React from "react";

import Header from "../Header";

type MainLayoutProps = {
  children: React.JSX.Element;
};

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-gray-500 to-gray-100">
      <div className="flex flex-col w-full justify-center items-start">
        <Header />
        <div className="flex h-full w-full justify-center items-center py-5 px-20">
          <div className="backdrop-blur-md bg-white/50 h-4/5 rounded-lg w-full p-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
