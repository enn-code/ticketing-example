import React from "react";

import Header from "../components/shared/layout/header.shared";
import Footer from "../components/shared/layout/footer.shared";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
