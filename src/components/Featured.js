import React, { useRef } from "react";
import {useGaspFeatureLeftShutterUnveil,useGaspFeatureRightShutterUnveil} from "../hooks/gsap"

const Featured = () => {
  const featureRef=useRef(null)
  const featureLeftShutterRef=useRef(null)
  const featureRightShutterRef=useRef(null)

useGaspFeatureLeftShutterUnveil(featureLeftShutterRef,featureRef)

useGaspFeatureRightShutterUnveil(featureRightShutterRef,featureRef)

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Featured</h2>
      <div className="features">
        <div className="features-l">
          <span className="feature-text">90'S TELEPHONE</span>
          <img src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="90'S TELEPHONE" />
          <span className="features-shutter-l" ref={featureLeftShutterRef}></span>
        </div>
        <div className="features-r">
          <span className="feature-text">90'S CASSETTE PLYERPLYER</span>
          <img src=" https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="90'S CASSETTE PLYERPLYER" />
          <span className="features-shutter-r" ref={featureRightShutterRef}></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
