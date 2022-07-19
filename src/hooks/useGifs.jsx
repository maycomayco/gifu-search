/* eslint-disable no-useless-return */
import { useEffect, useState, useContext } from "react";
import { getGifs, getTrendingGifs } from "../services/giphy.service";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;
/* Custom hook for gif search */
const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  // state only form controls the loading of the pagination
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  // get the keyword from localStorage
  const keywordToUse = keyword || localStorage.getItem("lastKeyword");

  useEffect(() => {
    setLoading(true);

    if (!keywordToUse) {
      getTrendingGifs().then((resp) => {
        setGifs(resp);
        setLoading(false);
        localStorage.setItem("lastKeyword", "random");
      });
    } else {
      getGifs({ keyword: keywordToUse }).then((resp) => {
        setGifs(resp);
        setLoading(false);
        // save keyword to localStorage
        localStorage.setItem("lastKeyword", keyword);
      });
    }
  }, [keyword, setGifs]);

  // This effect run when the page changes
  useEffect(() => {
    // in this conditions the dont change anything
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      // we add the actual state with the new gifs from the response
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [page, keywordToUse]);

  return { loading, loadingNextPage, gifs, setPage };
};

export default useGifs;
