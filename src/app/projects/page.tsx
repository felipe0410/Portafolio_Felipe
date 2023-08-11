"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const Projet = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const row = "/slides/row.svg";
  const arraySlidesDesktop = [
    "/slides/desktop/slidesD1.svg",
    "/slides/desktop/slidesD2.svg",
    "/slides/desktop/slidesD3.svg",
    "/slides/desktop/slidesD4.svg",
  ];
  const arraySlidesResponsive = [
    "/slides/responsive/SLIDE1.svg",
    "/slides/responsive/SLIDE2.svg",
    "/slides/responsive/SLIDE3.svg",
    "/slides/responsive/SLIDE4.svg",
  ];

  return (
    <Box
      height={"100%"}
      sx={{ textAlignLast: "center", display: "flex", alignItems: "center" }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log("swiper:::>", swiper)}
        onSlideChange={(e) => console.log("slide change:::>", e)}
        effect="fade"
        autoplay={{ delay: 3000 }}
      >
        {(isMobile ? arraySlidesResponsive : arraySlidesDesktop).map((e, i) => (
          <SwiperSlide key={i}>
            <Box
              component={"img"}
              width={{ xs: "65%", sm: "90%" }}
              src={e}
              alt={"img"}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          display: "flex",
          width: "88%",
          justifyContent: "space-between",
          margin: "0 auto",
          position: "absolute",
          top: "54%",
          right: "6%",
          zIndex: 1000,
        }}
      >
        <Box className="swiper-button-next-custom">
          {
            <Box
              height={{ xs: "34px", sm: "63px" }}
              sx={{ rotate: "180deg" }}
              component={"img"}
              src={row}
            />
          }
        </Box>
        <Box className="swiper-button-prev-custom">
          {
            <Box
              height={{ xs: "34px", sm: "63px" }}
              component={"img"}
              src={row}
            />
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Projet;
