import React from "react";
import Gallery from "../component/gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageGallery from 'react-image-gallery';
import "./gallery.css";

import photos from "../fixtures/photos.json";

const property = {
  showIndex: false,
  showBullets: false,
  infinite: true,
  showThumbnails: true,
  showFullscreenButton: true,
  showGalleryFullscreenButton: true,
  showPlayButton: true,
  showGalleryPlayButton: true,
  showNav: true,
  isRTL: false,
  slideDuration: 450,
  slideInterval: 2000,
  slideOnThumbnailOver: false,
  thumbnailPosition: 'bottom',
  showVideo: {},
  useWindowKeyDown: true,
}

export default function GalleryContainer() {
  return (
    <>
      <Gallery>
        <Gallery.Div>
          <Gallery.Heading>Our memories</Gallery.Heading>
          <Gallery.Text>Gallery</Gallery.Text>
          <Gallery.SubText>
            The more that you read, the more things you will know, the more that
            you learn, the more places you'll go: Dr. Seuss
          </Gallery.SubText>
        </Gallery.Div>

        <Gallery.Frame>
          <ImageGallery items={photos} {...property} />
        </Gallery.Frame>
      </Gallery>
    </>
  );
}
