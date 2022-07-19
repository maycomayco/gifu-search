import { useContext } from "react";
import { GifsContextProvider } from "../context/GifsContext";
import Gif from "./Gif";

const Detail = ({ params }) => {
  const gifs = useContext(GifsContextProvider);

  const foundGif = gifs.find((gif) => gif.id === params.id);

  return <Gif {...foundGif} />;
};

export default Detail;
