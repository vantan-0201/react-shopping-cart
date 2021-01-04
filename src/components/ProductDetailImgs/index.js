import React from "react";

export default function ProductDetailImgs({
  imgsProduct,
  handelOpenModalImg,
  alt,
}) {
  return (
    <div className="product__detail__imgs position__absolute flex a-center j-center">
      {imgsProduct
        ? imgsProduct.map((img, index) => {
            return (
              <div
                key={index}
                className="product__detail__img cursor"
                onClick={(e) => handelOpenModalImg(index, e)}
              >
                <img src={img} alt={alt} />
              </div>
            );
          })
        : ""}
    </div>
  );
}
