import React, { useEffect, useRef, useState } from "react";
import Slider from "../slider/Slider";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import HeroImg from "../../img/hero-img.jpg";

const Header = (props) => {
  const { slides } = props;
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);
  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   };
  //   timeout.current = setInterval(nextSlide, 5000);
  //   return function () {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, [current, length]);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="bg-black py-20 lg:py-28">
      {/* <!-- Start Hero Block --> */}

      <div className="container mx-auto px-5 text-center">
        {slides.map((slide, index) => {
          return (
            <div key={slide.id}>
              {index === current && (
                <div>
                  <div >
                    <img
                      className="mx-auto xl:max-w-screen-2xl w-full mb-4"
                      src={slide.image}
                      alt={slide.alt}
                    />
                    <div className="flex absolute bottom-52 sm:-bottom-2 md:-bottom-24 lg:-bottom-72 xl:-bottom-76 right-4 xl:right-12 z-10" >
                      <Slider
                        className="h-4 w-4"
                        onClick={prevSlide}
                        icon={<IoArrowBack className="h-4 md:h-8 w-4 md:w-8" />}
                      />
                      <Slider
                        onClick={nextSlide}
                        icon={<IoArrowForward className="h-4 md:h-8 w-4 md:w-8" />}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-16">
                    <div className="space-y-4 mb-12">
                      <h4 className="text-2xl sm:text-3xl font-semibold text-white">
                        {slide.lable}
                      </h4>
                      <h1 className="text-5xl sm:text-7xl font-bold  text-white">
                        {slide.title}
                      </h1>
                    </div>
                    {/* Button On hero Section */}
                    <a
                      href={slide.path}
                      className="px-12 py-4 bg-blue-800 hover:bg-blue-900 transition duration-300 ease-in-out shadow hover:shadow-lg transform hover:scale-110 text-white font-semibold text-lg rounded-full inline-block"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* <div className="space-y-12">
          <p class="lg:w-3/5 mx-auto text-xl sm:text-3xl font-semibold text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            obcaecati perferendis voluptas quasi quidem natus error
            voluptatibus.
          </p>
          <div class="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-10 md:space-x-20">
            <div class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 sm:text-left">
              <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="font-medium text-gray-600">
                Mechanical <br />
                Shutter
              </span>
            </div>
            <div class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 sm:text-left">
              <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="font-medium text-gray-600">
                4dB Noise <br />
                Reduction
              </span>
            </div>
            <div class="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 sm:text-left">
              <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="font-medium text-gray-600">
                1-inch <br />
                Image Sensor
              </span>
            </div>
          </div>
        </div> */}
      </div>
      {/* <!-- End Hero Block --> */}
    </section>
  );
};

export default Header;
