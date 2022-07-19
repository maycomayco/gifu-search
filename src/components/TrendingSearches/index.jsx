import React, { Suspense } from "react";
import useIsNearScreen from "../../hooks/useIsNearScreen";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

/* This component handle de lazy loading of the trending searches */
const LazyTrendingSearches = () => {
  const { isNearScreen, fromRef } = useIsNearScreen("100px");

  return (
    <div ref={fromRef}>
      {/* Suspense is used for lazy loading, is recommended have specifics <Suspense> for each component. https://github.com/danilowoz/react-content-loader
			The fallback parameter receives anythings that can be rendered (components, string, null, etc)
			*/}
      <Suspense fallback="I am loading...">
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  );
};

export default LazyTrendingSearches;
