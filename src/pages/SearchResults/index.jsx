import { Text } from "@chakra-ui/react";
import { useRef, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";
import useGifs from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";
import useNearScreen from "../../hooks/useNearScreen";

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  console.log({ isNearScreen });

  // const debouncedHandleNextPage = useRef();

  const handleNextPage = () => {
    // update the value of page
    setPage((prevPage) => prevPage + 1);
  };

  // const handleNextPage = () => console.log("handleOnClick");

  /*
    useCallback(), receives a function as argument and returns a memoized version of that function.
    - case 1, the function declared is very expensive, so we want to memoize it
    - case 2, we need exactly the same function because we know his environment and we need control over it
    - useCallback always need a dependency array, so we pass an empty array [] at least
  */
  const debouncedHandleNextPage = useCallback(
    debounce(handleNextPage, 1000),
    []
  );

  useEffect(() => {
    if (isNearScreen) debouncedHandleNextPage();
  }, [debouncedHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <b>cargando...</b>
      ) : (
        <>
          <Text fontSize="2xl">{decodeURI(keyword)}</Text>
          <ListOfGifs gifs={gifs} />
          {/* <Button colorScheme="blue" onClick={handleOnClick}>
            Get next page
          </Button> */}
          <div id="visor" ref={externalRef} />
        </>
      )}
      {/* <Button colorScheme="blue" onClick={handleOnClick}>
        Get next page
      </Button> */}
    </>
  );
}
export default SearchResults;
