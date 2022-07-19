import { Box, Text } from "@chakra-ui/react";
import { Link } from "wouter";

const Gif = ({ url, id, title }) => (
  <Box mb={3} p={2} borderWidth="1px" borderRadius="lg" bg="white">
    <Link to={`/gif/${id}`}>
      <img src={url} alt="" />
      <Text fontWeight={600}>{title}</Text>
    </Link>
  </Box>
);

export default Gif;
