import { useState, useEffect, useRef } from "react";

const useIsNearScreen = ({ distance = "100px" } = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  /* useRef(), nos permite guardar una valor que permanece entre renderizados pero cuando ese valor cambia NO renderiza nuevamente el componente, similar a useState() */
  const fromRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      // si el elemento esta haciendo intersecction con el viewport mostramos el componente TrendingSearches
      if (el.isIntersecting) {
        setIsNearScreen(true);
        // disconnect the observer when the component is rendered
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      // rootMargin nos indica que distancia se debe hacer inteseccion con el viewport
      rootMargin: distance,
    });

    /* Cuando necesitamos acceder al valor actual de la referencia debemos utilizar la propiedad .current de la misma */
    observer.observe(fromRef.current);

    // when then component is not used we disconnect the observer too
    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
};

export default useIsNearScreen;
