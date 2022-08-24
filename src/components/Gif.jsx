import { Text, Image, GridItem } from "@chakra-ui/react";
import { Link } from "wouter";

const Gif = ({ url, id, title }) => (
  <GridItem bg="black.500">
    <Link to={`/gif/${id}`}>
      <Image src={url} alt="" />
      <Text fontWeight={600} fontSize="xs" color="whiteAlpha.900">
        {title}
      </Text>
    </Link>
  </GridItem>
);

export default Gif;
