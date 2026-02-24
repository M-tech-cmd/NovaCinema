// src/components/Banner.jsx
import React from "react";
import { Tickets, Info, Star } from "lucide-react";
import Video from "../../assets/MovieBannerVideo.mp4";
import { bannerStyles } from "../../assets/dummyStyles";

const Banner = () => {
  return (
    <div className={bannerStyles.container}>
      {/* Video background (covers all sizes) */}
      <div className={bannerStyles.videoContainer}>
        <video autoPlay loop muted playsInline className={bannerStyles.video}>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* subtle overlay to keep text legible on smaller screens */}
        <div aria-hidden="true" className={bannerStyles.overlay} />
      </div>

      {/* Content */}
      <div className={bannerStyles.content}>
        <div className={bannerStyles.contentInner}>
          {/* Title — professional cinematic font */}
          <h1
            className={bannerStyles.title}
            style={{
              fontFamily: "'Bebas Neue', 'Anton', 'Impact', sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Oppenheimer
          </h1>

          {/* Description */}
          <p className={bannerStyles.description}>
            During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.
          </p>

          {/* Rating and genre */}
          <div className={bannerStyles.ratingGenreContainer}>
            <div className={bannerStyles.ratingContainer}>
              <div className={bannerStyles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={bannerStyles.star}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className={bannerStyles.ratingText}>8.2/10</span>
            </div>

            <div className={bannerStyles.genreText}>
              Biopic • Historical • Political
            </div>
          </div>

          {/* Action buttons */}
          <div className={bannerStyles.buttonsContainer}>
            <a href="/movies" className={bannerStyles.bookButton}>
              <Tickets className={bannerStyles.icon} fill="white" />
              Book Movies
            </a>

            <a href="/contact" className={bannerStyles.infoButton}>
              <Info className={bannerStyles.icon} />
              More Info
            </a>
          </div>
        </div>
      </div>

      {/* Load Bebas Neue from Google Fonts + style tweaks */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        ${bannerStyles.customCSS || ""}
      `}</style>
    </div>
  );
};

export default Banner;