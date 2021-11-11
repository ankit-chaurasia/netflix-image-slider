import { useState, useRef, useEffect } from 'react';

const PADDINGS = 110;

const useSliding = (elementWidth, countElements) => {
  const containerRef = useRef(null);
  const [imageBoxWidth, setImageBoxWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth - PADDINGS;
    setImageBoxWidth(elementWidth);
    setTotalInViewport(Math.floor(containerWidth / elementWidth));
  }, [containerRef.current, elementWidth]);

  const handlePrev = () => {
    setViewed(viewed - 1);
    setDistance(distance + imageBoxWidth);
  };

  const handleNext = () => {
    setViewed(viewed + 1);
    setDistance(distance - imageBoxWidth);
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
