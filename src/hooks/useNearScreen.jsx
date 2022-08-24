/* eslint-disable no-unused-expressions */
import { useState, useEffect, useRef } from "react";

/*
  useNearScreen
  - once, is used to check if the component is near the screen or the element is in the viewport
*/
const useNearScreen = ({
  distance = "100px",
  externalRef,
  once = true,
} = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  /* useRef(), nos permite guardar una valor que permanece entre renderizados pero cuando ese valor cambia NO renderiza nuevamente el componente, similar a useState() */
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const elementToObserve = externalRef
      ? externalRef.current
      : fromRef.current;

    const onChange = (entries, onChangeObserver) => {
      const el = entries[0];
      // si el elemento esta haciendo intersecction con el viewport mostramos el componente TrendingSearches
      if (el.isIntersecting) {
        setIsNearScreen(true);
        // disconnect the observer when the component is rendered
        once && onChangeObserver.disconnect();
        // onChangeObserver.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    /*
      - IntersectionObserver polyfill
    */
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        // rootMargin nos indica que distancia se debe hacer inteseccion con el viewport
        rootMargin: distance,
      });

      if (elementToObserve) observer.observe(elementToObserve);
    });

    // when then component is not used we disconnect the observer too
    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
};

export default useNearScreen;
