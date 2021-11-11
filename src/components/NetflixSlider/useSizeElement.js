import { useState, useRef, useEffect } from 'react';

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(elementRef.current.clientWidth);
    }, 1);
  });

  return { width, elementRef };
};

export default useSizeElement;
