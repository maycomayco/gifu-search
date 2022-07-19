import { List, ListItem, Link as LinkChakra } from "@chakra-ui/react";
import { Link } from "wouter";

const Category = ({ name, options = [] }) => (
  <div>
    <h3>{name}</h3>
    <List>
      {options.map((elem) => (
        <ListItem key={elem}>
          <LinkChakra as={Link} to={`/search/${elem}`}>
            {elem}
          </LinkChakra>
        </ListItem>
      ))}
    </List>
  </div>
);

export default Category;
