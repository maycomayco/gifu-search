import { useContext } from "react";
import GifsContext from "../context/GifsContext";

/* This is a custom hook that allows us to only read the context,
this is a good practice to keep modification from reading separate */
const useContextGifs = () => {
  const { gifs } = useContext(GifsContext);
  return gifs;
};

export default useContextGifs;
