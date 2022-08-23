import { List, ListItem, Link as LinkChakra } from "@chakra-ui/react";
import { Link } from "wouter";

const Category = ({ options = [] }) => (
  <List>
    {options.map((elem) => (
      <ListItem key={elem}>
        <LinkChakra as={Link} to={`/search/${elem}`}>
          {elem}
        </LinkChakra>
      </ListItem>
    ))}
  </List>
);

export default Category;
