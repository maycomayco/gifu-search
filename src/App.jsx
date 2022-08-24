import {
  Container,
  VStack,
  Box,
  Heading,
  Link as LinkChakra,
} from "@chakra-ui/react";
import { Link, Route } from "wouter";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <Container maxW="container.xl">
      <VStack spacing={3}>
        <Box>
          <Heading fontSize="4xl">
            <LinkChakra as={Link} to="/">
              Gifu App
            </LinkChakra>
          </Heading>
        </Box>
        <Box w="100%">
          {/* wrap only the routes of our app with the provider */}
          <GifsContextProvider>
            {/* Set routes of the app in the declarative way */}
            <Route component={Home} path="/" />
            {/* <Route component={ListGifs} path="/gif/:keyword"></Route> */}
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </Box>
      </VStack>
    </Container>
  );
}

export default App;
