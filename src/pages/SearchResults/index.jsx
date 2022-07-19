import { Text, Button } from "@chakra-ui/react";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleOnClick = () => {
    // update the value of page
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {loading ? (
        <b>cargando...</b>
      ) : (
        <>
          <Text fontSize="2xl">{decodeURI(keyword)}</Text>
          <ListOfGifs gifs={gifs} />
          <Button colorScheme="blue" onClick={handleOnClick}>
            Get next page
          </Button>
        </>
      )}
      {/* <Button colorScheme="blue" onClick={handleOnClick}>
        Get next page
      </Button> */}
    </>
  );
}
export default SearchResults;
