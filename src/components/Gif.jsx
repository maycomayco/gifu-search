import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "wouter";

const Gif = ({ url, id, title }) => (
  <Box mb={3} p={2} borderWidth="1px" borderRadius="lg" bg="white">
    <Link to={`/gif/${id}`}>
      {/* <img src={url} alt="" /> */}
      <Image src={url} alt="" />
      <Text fontWeight={600} color="blackAlpha.800">
        {title}
      </Text>
    </Link>
  </Box>
);

export default Gif;
