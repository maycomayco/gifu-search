import { useEffect, useState } from "react";
import { getTrendingTerms } from "../../services/giphy.service";
import Category from "../Category";

/* This component is called by the <TrendingSearches> component, this other component is prioritary beacause it's has the lazy logic */
const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Trending Searches" options={trends} />;
};

export default TrendingSearches;
