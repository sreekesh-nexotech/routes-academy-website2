"use client";

import { useRef, useState, useEffect } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CertificationSection: React.FC<{
  img: string | string[];
  title?: string | string[];
}> = ({
  img,
  title = "Certification By National Skill Development Council",
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Convert single image to array for consistent handling
  const certificates = Array.isArray(img) ? img : [img];
  const titles = Array.isArray(title) ? title : [title];

  // Get current title based on active index
  const currentTitle = titles[activeIndex] || titles[0];

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 text-center scroll-mt-30"
      id="certificate"
    >
      <h2 className="text-3xl font-poppins font-bold text-[#172554] mb-6">
        {currentTitle}
      </h2>

      {certificates.length > 1 ? (
        <>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="w-full max-w-3xl mx-auto mb-6"
            onSlideChange={(s) =>
              setActiveIndex((s as unknown as SwiperClass).activeIndex ?? 0)
            }
            onSwiper={(s) => (swiperRef.current = s as SwiperClass)}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-3xl mx-auto">
                  <img
                    src={certificate}
                    alt={`Certificate ${index + 1}`}
                    width={700}
                    height={500}
                    className="mx-auto rounded-lg shadow-xl border border-gray-200"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Indicator dots */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                aria-label={`Go to certificate ${i + 1}`}
                className={
                  i === activeIndex
                    ? "h-2 w-8 rounded-full bg-[#172554] transition-all"
                    : "h-2 w-6 rounded-full bg-gray-300 transition-all"
                }
              />
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-3xl mx-auto mb-6">
          <img
            src={certificates[0]}
            alt="NSDC Certificate"
            width={700}
            height={500}
            className="mx-auto rounded-lg shadow-xl border border-gray-200"
          />
        </div>
      )}

      <p className="text-gray-600 max-w-4xl mx-auto">
        Upon successful completion, you will receive a verifiable certification
        recognized by the National Skill Development Council, significantly
        boosting your resume and career prospects across the industry.
      </p>
    </div>
  );
};

export default CertificationSection;
