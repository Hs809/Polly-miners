// // import React from "react";
// // import "react-slideshow-image/dist/styles.css";
// // import { Carousel } from "react-responsive-carousel";
// // import Image from "next/image";
// import pc1 from "../styles/images/gamingpc1.jpg";
// import pc2 from "../styles/images/gamingpc2.jpg";
// import gpu from "../styles/images/gpu.jpg";

// // const fadeImages = [
// //   {
// //     url: pc1,
// //     caption: "First Slide",
// //   },
// //   {
// //     url: pc2,
// //     caption: "Second Slide",
// //   },
// //   {
// //     url: gpu,
// //     caption: "Third Slide",
// //   },
// // ];

// // function BestGpu() {
// //   return (
// //     <div className="best-gpu-container">
// //       <Carousel width="40%" height="70%" autoPlay="true" interval="2000" infiniteLoop="true" className="carousel-container">
// //         <div>
// //           <Image src={gpu} width={250} height={200} layout="responsive" />
// //           <p className="legend">Legend 1</p>
// //         </div>
// //         <div>
// //           <Image src={pc1} width={250} height={200} layout="responsive" />
// //           <p className="legend">Legend 2</p>
// //         </div>
// //         <div>
// //           <Image src={pc2} width={250} height={200} layout="responsive"/>
// //           <p className="legend">Legend 3</p>
// //         </div>
// //       </Carousel>
// //     </div>
// //   );
// // }

// // export default BestGpu;

// import React, { useState } from 'react';
// // import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// const SliderData = [
//   {
//     image: pc1
//   },
//   {
//     image: pc2
//   },
//   {
//     image: gpu
//   },
// ]

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = SliderData.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className='slider'>
//       <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
//       <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? 'slide active' : 'slide'}
//             key={index}
//           >
//             {index === current && (
//               <img   src={slide.image} alt='travel image' className='image' />
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default ImageSlider;
