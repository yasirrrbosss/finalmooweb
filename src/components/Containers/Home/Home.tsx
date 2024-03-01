'use client';
import { FC, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import Image from 'next/image';
import 'swiper/css';

import StackedCarousel from './components/StackedCarousel';
import Accordion from './components/FaqAccordion';
import Form from './components/Form';

const slideData1 = [
  '/images/moo1.png',
  '/images/moo2.png',
  '/images/moo3.png',
  '/images/moo4.png',
  '/images/moo5.png',
  '/images/moo1.png',
  '/images/moo2.png',
  '/images/moo3.png',
  '/images/moo4.png',
  '/images/moo5.png',
];

const slideData2 = [
  '/images/moo5.png',
  '/images/moo4.png',
  '/images/moo3.png',
  '/images/moo2.png',
  '/images/moo1.png',
  '/images/moo5.png',
  '/images/moo4.png',
  '/images/moo3.png',
  '/images/moo2.png',
  '/images/moo1.png',
];

const ContainerHome: FC = () => {
  const [scale, setScale] = useState<number>(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);

  const handleToggleAccordion = (accordionNumber: number) => {
    setOpenAccordion((prev) =>
      prev === accordionNumber ? null : accordionNumber
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.001;
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative overflow-x-hidden">
        <div
          className="h-[1080px] w-screen fixed -z-50"
          style={{
            backgroundImage: `url('/images/pxfuel.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <section className="w-full h-screen">
          <div className="relative w-screen h-screen overflow-hidden max-w-screen">
            <Image
              src="/images/bgmoo.png"
              alt="Picture of the author"
              width={10000}
              height={0}
              className="transform transition duration-500 object-cover w-full h-full"
              style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.15s ease-in-out',
              }}
              loading="lazy"
            />
            <Image
              src={'/images/logomoonobg.png'}
              width={300}
              height={300}
              alt="hero"
              className="absolute bottom-0 md:inline-block left-0"
              loading="lazy"
            />
            <div className="absolute top-0 w-[100%] h-[100%] flex flex-col justify-between  ">
              <div className=" flex justify-between items-center w-full  ">
                <div className="flex-1 flex items-center justify-center"></div>
                <div className="flex-1 flex items-center justify-center">
                  
                </div>
                
              </div>
              <div className="">
                <div className="flex flex-col items-center justify-center animate-opacity">
                  <h1 className="text-white text-[96px] font-bold">MOOTOPIA</h1>
                  <MdKeyboardDoubleArrowDown className="text-9xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 mt-4 max-w-screen">
          <div className="w-full">
            <Swiper
              breakpoints={{
                375: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 8 },
              }}
              spaceBetween={30}
              autoplay={{ delay: 0 }}
              speed={4000}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {slideData1.map((src, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`w-[200px] rounded-xl transition-transform duration-300 ${
                      (hoveredIndex !== null && hoveredIndex !== index) ||
                      hoveredIndex2 !== null
                        ? 'grayscale'
                        : 'grayscale-0'
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image
                      src={src}
                      width={200}
                      height={200}
                      alt="hero"
                      className="object-cover rounded-xl grayscale-100 hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Second row with reversed direction */}
          <div className="w-full">
            <Swiper
              breakpoints={{
                375: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 8 },
              }}
              spaceBetween={30}
              autoplay={{ delay: 0 }}
              speed={4000}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
              style={{ direction: 'rtl' }}
            >
              {slideData2.map((src, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`w-[200px] rounded-xl transition-transform duration-300 ${
                      (hoveredIndex2 !== null && hoveredIndex2 !== index) ||
                      hoveredIndex !== null
                        ? 'grayscale'
                        : 'grayscale-0'
                    }`}
                    onMouseEnter={() => setHoveredIndex2(index)}
                    onMouseLeave={() => setHoveredIndex2(null)}
                  >
                    <Image
                      src={src}
                      width={200}
                      height={200}
                      alt="hero"
                      className="object-cover rounded-xl grayscale-100 hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="mt-24">
          <Form />
        </section>

        <section className="mt-24 w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-16 text-3xl text-white text-center font-extrabold ">
            <div className="text-center">
              <Image
                src={'/images/logomoonobg.png'}
                width={200}
                height={200}
                alt="hero"
                className="object-cover md:inline-block hidden"
                loading="lazy"
              />
              <h1 className="text-2xl md:text-5xl text-white text-center font-extrabold inline-block">
                WELCOME TO
                <br />
                <span className="text-5xl md:text-9xl">MooTopia</span>
              </h1>
              <Image
                src={'/images/logomoonobg.png'}
                width={200}
                height={200}
                alt="hero"
                className="object-cover md:inline-block hidden"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-16 text-lg md:text-3xl text-white text-center font-extrabold ">
              <h1 className="w-2/3 text-white text-center font-extrabold ">
              Craft your bovine tale in MooTopia🐄
              </h1>
              <p></p>
              <div className="flex gap-10">
                <a
                  href="https://twitter.com/MooOnSei_"
                  target="blank"
                  style={{ cursor: 'url(/images/cursor.png), auto' }}
                  className="flex items-center gap-4 text-white font-extrabold text-4xl hover:opacity-70"
                >
                  <RiTwitterXFill
                    className="text-4xl mx-auto hover:opacity-50 "
                    style={{ cursor: 'url(/images/cursor.png), auto' }}
                  />
                  <h1>@MooOnSei_</h1>
                </a>

                <a
                  href="https://discord.gg/"
                  target="blank"
                  style={{ cursor: 'url(/images/cursor.png), auto' }}
                  className="flex items-center gap-4 text-white font-extrabold text-4xl hover:opacity-70"
                >
                  <FaDiscord className="text-4xl" />
                  <h1>Discord</h1>
                </a>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="mt-44 max-w-7xl mx-auto ">
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="w-2/3 h-[1000px] rounded-xl">
              <Image
                src={`/images/alienmoo.png`}
                alt={`Image `}
                width={800}
                height={0}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="flex flex-col text-center gap-5">
              <h1 className="text-6xl font-bold text-white">
                FEELING MOO?
              </h1>
              <p className="text-xl text-white">
                SHARE ON TWITTER FOR A CHANCE TO WIN A
                WHITELIST SPOT!
              </p>
              <a
                className="w-full bg-pink-600 text-white font-medium text-2xl py-3 rounded-lg"
                href="https://twitter.com/intent/post?text=Craft%20your%20bovine%20tale%20in%20MooTopia🐄.%0AI%20have%20applied%20as%20an%20WhiteList%3A%20https%3A%2F%2Fseimoo.xyz%2F%0AJoin%20Us%20in%20MooTopia%20%40MooOnSei_"
                data-size="large"
                target="blank"
              >
                SHARE NOW
              </a>
            </div>
          </div>
        </section>

        <section className="mt-44 max-w-7xl mx-auto">
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
            <div className="box p-4 flex justify-start items-center mb-4 md:mb-0">
              
            </div>
            <div className="box p-4 text-center">
              <p className="text-white text-2xl md:text-5xl font-extrabold mb-2">
                MooTopia
              </p>
              <p className="text-white text-4xl md:text-8xl font-extrabold">
                
              </p>
            </div>
            <div className="box p-4 flex justify-center items-center mt-4 md:mt-0">
              
            </div>
          </div>

          <StackedCarousel />
        </section>

        <section className=" mt-44 max-w-7xl mx-auto ">
          <div className="text-center uppercase font-extrabold text-white">
            <h1 className=" text-2xl md:text-5xl">Craft your bovine tale </h1>
            <h1 className=" text-4xl md:text-7xl mt-3">
            MooTopia{' '}
            </h1>
            <h1 className=" text-xl md:text-2xl mt-8">Powered By MooS Labs</h1>
            <Image
              src={'/images/logomoonobg.png'}
              height={400}
              width={400}
              alt="Hero"
              className="mx-auto"
              loading="lazy"
            />
          </div>
        </section>
        <section className=" mt-44 max-w-7xl mx-auto ">
          <h1 className="mx-auto text-center text-white font-extrabold text-7xl">
            FAQ
          </h1>
          <div className="md:flex items-center">
            <div className="box md:w-2/3 p-4 uppercase ">
              <Accordion
                title="Where I Can Join?"
                content={
                  <div className="text-white font-extrabold text-md md:text-xl flex my-5">
                    <p>
                      Join Us in MooTopia
                      <a
                        href="https://discord.com"
                        className="underline text-orange-700 hover:opacity-70 mx-2"
                      >
                        discord
                      </a>
                    
                    </p>
                  </div>
                }
                isOpen={openAccordion === 1}
                onToggle={() => handleToggleAccordion(1)}
              />
              <Accordion
                title="MORE ABOUT MOO?"
                content={
                  <div className="text-white font-extrabold text-md md:text-xl flex my-5">
                    <p>
                      Check details 
                    </p>
                    <a
                      href="https://moo-on-sei.gitbook.io"
                      className="underline text-orange-700 hover:opacity-70 mx-2"
                    >
                      here
                    </a>
                  </div>
                }
                isOpen={openAccordion === 2}
                onToggle={() => handleToggleAccordion(2)}
              />
              <Accordion
                title="WHERE CAN BUY MOO?"
                content={
                  <div className="text-white font-extrabold text-md nd:text-xl flex my-5">
                    <p>Soon On</p>
                    <a
                      href="https://pallet.exchange"
                      className="underline text-orange-700 hover:opacity-70 mx-2"
                    >
                      Pallete exchange
                    </a>
                  </div>
                }
                isOpen={openAccordion === 3}
                onToggle={() => handleToggleAccordion(3)}
              />
            </div>
            <div className="box 1/3">
              <Image
                src={'/images/logomoonobg.png'}
                height={400}
                width={400}
                alt="Hero"
                className="mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="my-44 max-w-5xl mx-auto">
          <div className="text-center font-extrabold text-white text-7xl uppercase">
            <h1>Team</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 align-center items-center mt-8 mx-auto">
            <div className="items-center align-middle justify-center">
              <Image
                src={'/images/moo1.png'}
                width={150}
                height={150}
                alt="Team Member 1"
                className="rounded-full w-72 h-72 mx-auto"
                loading="lazy"
              />

              <div className="text-center text-white">
                <p className="font-extrabold text-4xl my-3">Luciazer</p>
                {/* <p className="font-bold text-2xl opacity-60">RWF</p> */}
                {/* <a href="/" style={{ cursor: 'url(/images/cursor.png), auto' }}>
                  <RiTwitterXFill
                    className="text-4xl mx-auto hover:opacity-50 "
                    style={{ cursor: 'url(/images/cursor.png), auto' }}
                  />
                </a> */}
              </div>
            </div>

            <div className="items-center">
              <Image
                src={'/images/moo5.png'}
                width={150}
                height={150}
                alt="Team Member 2"
                className="rounded-full w-72 h-72 mx-auto"
                loading="lazy"
              />

              <div className="text-center text-white">
                <p className="font-extrabold text-4xl my-3">Kylee</p>
                {/* <p className="font-bold text-2xl opacity-60">LWF</p> */}
                {/* <a href="/" style={{ cursor: 'url(/images/cursor.png), auto' }}>
                  <RiTwitterXFill
                    className="text-4xl mx-auto hover:opacity-50 "
                    style={{ cursor: 'url(/images/cursor.png), auto' }}
                  />
                </a> */}
              </div>
            </div>
            <div className="items-center">
              <Image
                src={'/images/moo3.png'}
                width={150}
                height={150}
                alt="Team Member 2"
                className="rounded-full w-72 h-72 mx-auto"
                loading="lazy"
              />

              <div className="text-center text-white">
                <p className="font-extrabold text-4xl my-3">Rodrigo</p>
                {/* <p className="font-bold text-2xl opacity-60">CF</p> */}
                {/* <a href="/" style={{ cursor: 'url(/images/cursor.png), auto' }}>
                  <RiTwitterXFill
                    className="text-4xl mx-auto hover:opacity-50 "
                    style={{ cursor: 'url(/images/cursor.png), auto' }}
                  />
                </a> */}
              </div>
            </div>
            <div className="items-center">
              <Image
                src={'/images/moo4.png'}
                width={150}
                height={150}
                alt="Team Member 2"
                className="rounded-full w-72 h-72 mx-auto"
                loading="lazy"
              />

              <div className="text-center text-white">
                <p className="font-extrabold text-4xl my-3">Ivaanov</p>
                {/* <p className="font-bold text-2xl opacity-60">Boruto`s Father</p> */}
                {/* <a href="/" style={{ cursor: 'url(/images/cursor.png), auto' }}>
                  <RiTwitterXFill
                    className="text-4xl mx-auto hover:opacity-50 "
                    style={{ cursor: 'url(/images/cursor.png), auto' }}
                  />
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContainerHome;
