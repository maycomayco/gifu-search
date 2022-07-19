// import { useContext } from "react";
import GifsContext from "../../context/GifsContext";
import Gif from "../../components/Gif";
import useContextGifs from "../../hooks/useContextGifs";

const Detail = ({ params }) => {
  /*
	TODO: if we refresh the page, we lost all the data, we need a callback to avoid that
	*/
  // load gifs from context
  const gifs = useContextGifs();

  // search the gif given from param
  const gif = gifs.find((gif) => gif.id === params.id);

  return <Gif {...gif} />;
};

export default Detail;
