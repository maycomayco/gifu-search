import { Grid } from "@chakra-ui/react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => (
  <Grid
    /*
      - repeat() is a util css function that repeats a rule n times
      - auto-fit is a css property that makes the grid fit its content
      - minmax(min-width, max-width) is a css property that sets the min and max width of the grid
    */
    templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
    // masonry value is available in firefox
    templateRows="masonry"
    gap={6}
  >
    {gifs.map((gif) => (
      <Gif {...gif} key={gif.id} />
    ))}
  </Grid>
);

export default ListOfGifs;
