import { useState, useEffect, FC } from 'react';
import Image from 'next/image';

const StackedCarousel: FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number>(1); // Set initial state to 1
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleMouseLeave = () => {
    // Do nothing on mouse leave, so it stays hovered on the last image
  };

  useEffect(() => {
    // Check screen size and update state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // You can adjust the breakpoint (768) as needed
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`max-w-[800px] mx-3 items-stretch md:mx-auto ${isMobile ? 'flex-col' : 'flex'}`}
    >
      {isMobile ? (
        <div className="flex flex-col gap-1">
          <Image
            src={`/images/${hoveredImage}.png`}
            alt={`Image ${hoveredImage}`}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="flex gap-2 mt-2">
            {[1, 2, 3, 4].map((imageNumber) => (
              <div
                key={imageNumber}
                className={`h-full transition-all duration-1000  w-24 grayscale hover:grayscale-0 overflow-hidden`}
                onMouseEnter={() => setHoveredImage(imageNumber)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="group w-full transform transition-transform duration-300">
                  <Image
                    src={`/images/${imageNumber}.png`}
                    alt={`Image ${imageNumber}`}
                    width={300}
                    height={300}
                    className={`object-cover w-full h-24 transition-transform duration-300 ${
                      hoveredImage !== imageNumber
                        ? 'grayscale-0 w-[800px] '
                        : ''
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex  max-w-[800px] mx-auto items-stretch">
          {[1, 2, 3, 4].map((imageNumber) => (
            <div
              key={imageNumber}
              className={`h-full transition-all duration-1000 hover:w-full w-24 grayscale ${
                hoveredImage !== imageNumber
                  ? 'grayscale h-[900px]'
                  : 'grayscale-0 w-[800px] '
              } overflow-hidden border-2 border-white`}
              onMouseEnter={() => setHoveredImage(imageNumber)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="group w-full transform transition-transform duration-300">
                <Image
                  src={`/images/${imageNumber}.png`}
                  alt={`Image ${imageNumber}`}
                  width={300}
                  height={300}
                  className={`object-cover w-full h-[800px] transition-transform duration-300 ${
                    hoveredImage !== imageNumber ? 'scale-100' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StackedCarousel;
