import React, { useEffect } from "react";
import ContactContainer from "../container/contact";
import FooterContainer from "../container/footer";
import HeaderContainer from "../container/header";

export default function Contact() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <HeaderContainer />
      <ContactContainer />
      <FooterContainer />
    </>
  );
}
