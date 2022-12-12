import React, { useRef } from 'react'
import {useGsapGalleryTitle,useGsapGalleryCatagory,useGsapGalleryImage} from "../hooks/gsap"

const GalleryItem = ({image}) => {

  const galleryTitleRef=useRef(null)
  const galleryCatagoryRef=useRef(null)
  const galleryImageRef=useRef(null)

  useGsapGalleryTitle(galleryTitleRef,galleryImageRef)
  useGsapGalleryCatagory(galleryCatagoryRef,galleryImageRef)
  useGsapGalleryImage(galleryImageRef)

  return (
    <div className='gallery-item'>
      <h1 className="gallery-item-title" ref={galleryTitleRef}>
      { image.title}
      </h1>
      <p className="gallery-item-catagory" ref={galleryCatagoryRef}>{image.category}</p>
    <div className="gallery-item-image"
    ref={galleryImageRef}
     style={{backgroundImage:`url(${image.src})`}}
    
    ></div>
    </div>
  )
}

export default GalleryItem;
