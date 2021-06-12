import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

const Carousel = () => {
  return (
    <>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={0.1}
        sideSize={0.9}
        //Para avanzar de uno en uno
        slidesToScroll={1}
        //Para ver la cantidad de imagenes
        slidesToShow={4}
        scrollOnDevice={true}
      >
        <div>
          <img
            alt=""
            src="https://i1.wp.com/fortemix.pe/wp-content/uploads/2019/09/4.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://i2.wp.com/fortemix.pe/wp-content/uploads/2019/09/3.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://i2.wp.com/fortemix.pe/wp-content/uploads/2019/09/2-copia.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://i1.wp.com/fortemix.pe/wp-content/uploads/2019/09/1-copia.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://i2.wp.com/fortemix.pe/wp-content/uploads/2019/09/5.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://i2.wp.com/fortemix.pe/wp-content/uploads/2019/09/2-copia.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://i1.wp.com/fortemix.pe/wp-content/uploads/2019/09/1-copia.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://i2.wp.com/fortemix.pe/wp-content/uploads/2019/09/3.jpg"
          />
        </div>
      </InfiniteCarousel>
    </>
  );
};

export default Carousel;
