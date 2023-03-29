import {
  Stack,
  HStack,
  VStack,
  Box,
  StackDivider,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Select,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import "./Navbar.css";
import Product from "./../db.json";
import Product1 from "../db.json";
import Product2 from ".././db.json";
// import logo1 from '../Image/TopImagePoster1.jpg';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//  import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { NewItem, Toprated, Dresses } from "./Modelnew";
// import { TopPoster } from "../Mainsection/MultipleLandingCart";
import { LandingPage } from "../Mainsection/Landing";

// import { LandingPage } from "../Mainsection/Landing";
// import { LandingPage } from "../Mainsection/Landing";

export default function Navbar() {
  
  return (
    <VStack>
      <Image  />
      <Flex
        alignItems="center"
        minWidth="max-content"
        gap="2"
        bg="gray.100"
        pr={5}
        pl={5}
        width="100%"
      >
        <Box></Box>
        <Spacer />

        <Flex alignItems="center">
          <Box className="Lunguage-Icon">
            <FontAwesomeIcon icon={faGlobe} />
          </Box>
          <Select p={0}>
            <option>English($)</option>
            <option>Hindi(H)</option>
            <option>French(F)</option>
            <option>Arabic(A)</option>
            <option>Russian(R)</option>
            <option>Spanish(S)</option>
          </Select>
        </Flex>
        <Box>
          <FontAwesomeIcon icon={faUser} />
        </Box>
        <Flex gap={1}>
          <Text color="gray.500" className="SignUp">
            Sign In
          </Text>
          /
          <Spacer />
          <Text
            onClick={() => {
              console.log("Upendra");
            }}
            color="gray.500"
            className="SignUp"
          >
            {" "}
            Sign Up
          </Text>
        </Flex>
      </Flex>

      {/* Second Navbar Line */}
      <Flex className="position">
        <Flex
          className="search"
          borderBottom="1px solid gray"
          alignItems="center"
          minWidth="max-content"
          gap="2"
          pr={5}
          pl={5}
     
        >
          <Flex gap={5}>
            <Box className="logo-name">ANTHROPOLOGIE</Box>
            <Spacer />
            <Box className="logo-style">ANTHROPOLOGIE</Box>
          </Flex>
          <Spacer />

          <Flex gap={6}>
            <InputGroup size="sm" alignItems="center">
              <Input placeholder="Search anthologie" p={6} />
              <InputRightAddon
                padding={6}
                fontSize={25}
                children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              />
            </InputGroup>
            <Box className="cart-icon" p={6} fontSize={30}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Box>
          </Flex>
        </Flex>

        {/* Third Navbar Line */}

        <SimpleGrid
          className="third-nav"
          minChildWidth="10%"
          minWidth="max-content"
        >
          <Box className="third-nav-box">
            <NewItem />
          </Box>
          <Box className="third-nav-box">
            <Toprated />
          </Box>
          <Box className="third-nav-box">
            <Dresses />
          </Box>
          <Box className="third-nav-box">Clothing</Box>
          <Box className="third-nav-box">Wedding</Box>
          <Box className="third-nav-box">Home & Furniture</Box>
          <Box className="third-nav-box">Beuty & Wellness</Box>
          <Box className="third-nav-box">Gift & Candles</Box>
          <Box className="third-nav-box">Sale</Box>
        </SimpleGrid>
      </Flex>

<LandingPage />

    </VStack>
  );
}