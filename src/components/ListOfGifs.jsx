import { SimpleGrid } from "@chakra-ui/react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => (
  <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={6} minHeight="99vh">
    {gifs.map((gif) => (
      <Gif {...gif} key={gif.id} />
    ))}
  </SimpleGrid>
);

export default ListOfGifs;
