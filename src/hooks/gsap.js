import { useEffect } from "react";
import gsap,{Expo} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterUnveil = (item,delay=0,trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
      height:"100%",
    },
    {
      height:0,
      duration:2,
      case:Expo.easeInOut,
      delay:delay,
      scrollTrigger:{
        trigger:trig.current,
        toggleActions: "play reverse play reverse"
      }
    })
  }, []);
};

export const useGsapDownStagger=(arr,delay)=>{
    useEffect(()=>{
    const el= arr.map(item=>item.current)
    gsap.fromTo(el,{
      y:"-100%",
      opacity:0
    },{
      y:0,
      opacity:1,
      duration:1.5,
      stagger:0.1,
      case:Expo.easeIn,
      delay:delay
    })
    })
}

export const useGsapPhotoDroping=(arr)=>{
  useEffect(()=>{
const el=arr.map((item)=>item.current)
    gsap.fromTo(el,{
      y:"-100vh",
      scale:0
    },{
      y:0,
      scale:1,
      duration:2,
      stagger:0.2,
      delay:2.7,
      case:Expo.easeInOut,
    })
  },[])
}
export const useGsapPhotoLevitate = (arr, trig) => {
  useEffect(() => {
   const el=arr.map(item=>item.current)
   gsap.fromTo(
    el,
    {
      y: 0,
    },
    {
      y: "-35%",
      ease:Expo.easeInOut,
      scrollTrigger:{
        trigger:trig.current,
        scrub:1,
        toggleActions:"play reverse play reverse"
      }
    }
   )
  }, []);
};


export const useGaspFeatureLeftShutterUnveil=(item,trig)=>{

  useEffect(()=>{
    const el=item.current;
    gsap.fromTo(
      el,
      {
        height:"100%"
      },
      {
       height:0,
       duration:1.3,
       ease:Expo.easeInOut,
       scrollTrigger:{
        trigger:trig.current,
        start:"top cemter",
        end:"bottom center",
        toggleActions:"play reverse play reverse"
       }
      }
    )
  })
}
export const useGaspFeatureRightShutterUnveil=(item,trig)=>{
  useEffect(()=>{
    const el=item.current;
    gsap.fromTo(
      el,
      {
        width:"100%"
      },
      {
       width:0,
       duration:1.3,
       ease:Expo.easeInOut,
       scrollTrigger:{
        trigger:trig.current,
        start:"top center",
        end:"bottom center",
        toggleActions:"play reverse play reverse"
       }
      }

    )
    },[])
}

export const useGsapGalleryImage=(item)=>{
  useEffect(()=>{
    const el=item.current
    gsap.fromTo(el,{
      x:0,
      width: 0,
    },
    {
      x:"30%",
      width:"100%",
      duration:1,
      ease:Expo.easeInOut,
      scrollTrigger:{
        trigger:el,
        start:"top center",
        end:"bottom top",
        toggleActions:"play reverse play reverse"
      }
    })
  },[])
}

export const useGsapGalleryTitle=(item,trig)=>{
  useEffect(()=>{
    const el=item.current
    gsap.fromTo(el,{
      x:"30%",
  
    },
    {
      x:0,
   
      duration:1,
      ease:Expo.easeInOut,
      scrollTrigger:{
        trigger:trig.current,
        start:"top center",
        end:"bottom top",
        toggleActions:"play reverse play reverse"
      }
    })
  },[])
}

export const useGsapGalleryCatagory=(item,trig)=>{
  useEffect(()=>{
    const el=item.current
    gsap.fromTo(el,{
      x:"-100%",
  
    },
    {
      x:0,
      duration:1,
      ease:Expo.easeInOut,
      scrollTrigger:{
        trigger:trig.current,
        start:"top center",
        end:"bottom top",
        toggleActions:"play reverse play reverse"
      }
    })
  },[])

}


export const useGsapFooterHeadLine=(item,trig)=>{
  useEffect(()=>{
    const el= item.current;
    gsap.fromTo(el,
      {
        y:"-100%"
      },
      {
        y:0,
        duration:1,
        scrollTrigger:{
          trigger:trig.current,
          toggleActions:"play"
        }

      })
  })
}