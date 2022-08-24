import React, { Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
import useNearScreen from "../../hooks/useNearScreen";

/*
  - React.lazy()
  - return a promise that resolves to the component to be lazy loaded
  - is used for lazy loading, is recommended have specifics <Suspense> for each component.
*/
const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

/*
  - Trending searches index component
  - this component is prioritary beacause it's has the lazy logic to handle the loading of the trending searches component
*/
const LazyTrendingSearches = () => {
  const { isNearScreen, fromRef } = useNearScreen("100px");

  return (
    <div ref={fromRef}>
      {/*
        - Suspense
        - is used for lazy loading, is recommended have specifics <Suspense> for each component. https://github.com/danilowoz/react-content-loader
			  - The fallback parameter receives anythings that can be rendered (components, string, null, etc)
        - This components show something while the component is loading
			*/}
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  );
};

export default LazyTrendingSearches;
