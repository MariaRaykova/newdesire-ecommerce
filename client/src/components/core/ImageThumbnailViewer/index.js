import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/thumbs/thumbs.scss";
import "./index.scss";
import SwiperCore, { Navigation, Thumbs } from 'swiper'; // import Swiper core and required modules
SwiperCore.use([Navigation, Thumbs]); // install Swiper modules

export default function ImageThumbnailViewer({ images }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="swiper-container">
            <Swiper
                style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff', 'width': "360px", 'heigth': "auto" }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
            >
                {images?.map((i) => (
                    <SwiperSlide key={i}>
                        <img src={i} width="360px" height="360px"/>
                    </SwiperSlide>
                ))}
              
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={3}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
                style={{ 'width': '500px' }} //на цялата лента с малки картинки
            >
                 {/* direction="vertical"
                 slideToClickedSlide={true} */}
                {images?.map((i) => (
                    <SwiperSlide  key={i}>
                        <img src={i} />
                    </SwiperSlide>
                ))}
             
            </Swiper>
        </div>
    )
}