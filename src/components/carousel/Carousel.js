import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import "./carousel.scss"
import 'swiper/swiper.min.css';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { SRLWrapper } from "simple-react-lightbox"

SwiperCore.use([Navigation, Pagination]);

const options = {
    settings: {
      overlayColor: "rgba(38, 15, 2, 0.9)",
      autoplaySpeed: 1500,
      transitionSpeed: 100,
      slideAnimationType: "slide",
      disablePanzoom: true,
      disableWheelControls: true,
    },
    buttons: {
      backgroundColor: "var(--mainText)",
      iconColor:"var(--dropdown)" ,
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false
    },
    thumbnails: {
      showThumbnails: true
    },
}

const Carousel = ({ data }) => {

    return (
        
      <div className="carousel-wrapper">
          <SRLWrapper options={options}>
              <Swiper
              breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  // when window width is >= 480px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  // when window width is >= 640px
                  1440: {
                    slidesPerView: 3,
                    spaceBetween: 10
                  }
                }}
                  loop={true}
                  navigation={true}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
              >   
                  {data && data.map(item => (
                      <SwiperSlide><a aria-label="Apartment pictures" href={item.url}><img src={item.url} key={item.id} alt="" /></a></SwiperSlide>
                  ))}
              </Swiper>
          </SRLWrapper>  
      </div>
        
    )
}

export default Carousel