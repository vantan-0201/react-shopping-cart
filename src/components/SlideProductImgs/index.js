import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import CloseIcon from "@material-ui/icons/Close";

// export default class SlideProductImgs extends React.Component {
//   constructor(props) {
//     super(props);
//     this.closeDialog = this.closeDialog.bind(this);
//   }

//   componentDidMount = () => {
//     window.addEventListener("scroll", () => {
//       document.documentElement.style.setProperty(
//         "--scroll-y",
//         `${window.scrollY}px`
//       );
//     });
//   };

//   closeDialog() {
//     const body = document.body;
//     const scrollY = body.style.top;
//     body.style.position = "";
//     body.style.top = "";
//     window.scrollTo(0, parseInt(scrollY || "0") * -1);
//     document.getElementById("modal__imgs").classList.remove("show");
//   }

//   render() {
//     const { imgsProduct, ref_slideShow } = this.props;
//     console.log(this.props);
//     const settings = {
//       dots: false,
//       lazyLoad: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };

//     return (
//       <div className="modal__imgs" id="modal__imgs" role="presentation">
//         <div className="modal__overlay" aria-hidden="true">
//           <Slider {...settings} ref={ref_slideShow} className="modal-content">
//             {imgsProduct.length &&
//               imgsProduct.map((img, index) => {
//                 return <img src={img.img} alt={img.alt} key={index} />;
//               })}
//           </Slider>

//           <span className="close__modal cursor" onClick={this.closeDialog}>
//             <CloseIcon fontSize="large" />
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// import React from 'react'

const settings = {
  dots: false,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SlideProductImgs(props) {
  const { imgsProduct, ref_slideShow, alt } = props;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    });
  }, []);

  const closeDialog = (e) => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    document.getElementById("modal__imgs").classList.remove("show");
  };
  return (
    <div className="modal__imgs" id="modal__imgs" role="presentation">
      <div
        className="modal__overlay"
        aria-hidden="true"
        onClick={closeDialog}
      ></div>
      <Slider {...settings} ref={ref_slideShow} className="modal-content">
        {imgsProduct &&
          imgsProduct.map((img, index) => {
            return <img src={img} alt={alt} key={index} />;
          })}
      </Slider>

      <span className="close__modal cursor" onClick={closeDialog}>
        <CloseIcon fontSize="large" />
      </span>
    </div>
  );
}
