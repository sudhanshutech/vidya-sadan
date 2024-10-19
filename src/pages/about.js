import React, { useEffect } from "react";
import AboutContainer from "../container/about";
import FooterContainer from "../container/footer";
import HeaderContainer from "../container/header";

export default function About() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <HeaderContainer />
      <AboutContainer />
      <FooterContainer />
    </>
  );
}
