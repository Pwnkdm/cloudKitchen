// src/Hooks/useSections.js
import { useState, useEffect } from 'react';

const useIntersection = ({element, rootMargin}) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [element, rootMargin]);

  return isVisible;
};

export default useIntersection;
