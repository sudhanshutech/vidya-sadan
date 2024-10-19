import React, { useEffect } from 'react'
import GalleryContainer from '../container/gallery'
import HeaderContainer from '../container/header'
import FooterContainer from "../container/footer"

export default function Gallery() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <HeaderContainer />
      <GalleryContainer />
      <FooterContainer />
    </>
  )
}
