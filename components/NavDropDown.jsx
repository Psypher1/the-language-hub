import Link from "next/link";

import { allLangLogos } from "@utils/langLogos";

// ChakraUI Imports
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Portal,
  Button,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";

export default function NavDropDown() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu>
      <MenuButton
        as={Button}
        _hover={{ bg: "blue.100" }}
        _focus={{ bg: "blue.100" }}
        _active={{ bg: "blue.100" }}
        px={6}
        py={4}
      >
        <i className="fas fa-chevron-down text-xl font-semibold"></i>
      </MenuButton>

      <MenuList backgroundColor="blue.50">
        {allLangLogos.map((logo, index) => {
          const learPath = logo.langPath.toLowerCase();
          return (
            <MenuItem key={index} _hover={{ bg: "blue.100" }}>
              <Link key={index} href={`/${learPath}/basics`} passHref>
                <a className="mb-2 flex cursor-pointer items-center space-x-2">
                  <Image
                    src={logo.logoURL}
                    height={15}
                    width={15}
                    className="h-5 w-5"
                    alt="language logo"
                  />
                  <span>{logo.langPath}</span>
                </a>
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>

    // <Menu isOpen={isOpen}>
    //   <MenuButton
    //     as={Button}
    //     _hover={{ bg: "blue.100" }}
    //     _focus={{ bg: "blue.100" }}
    //     _active={{ bg: "blue.100" }}
    //     px={8}
    //     py={4}
    //     fontSize={{ fontSize: "1.25rem" }}
    //     transition="all 0.2s"
    //   >
    //     Path
    //   </MenuButton>

    //   <Portal>
    //     <MenuList>
    //       {allLangLogos.map((logo, index) => {
    //         const learPath = logo.langPath.toLowerCase();
    //         return (
    //           <MenuItem key={index} _hover={{ bg: "blue.100" }}>
    //             <Link key={index} href={`/${learPath}/basics`} passHref>
    //               <a className="mb-2 flex cursor-pointer items-center space-x-2">
    //                 <img src={logo.logoURL} className="h-5 w-5" />
    //                 <span>{logo.langPath}</span>
    //               </a>
    //             </Link>
    //           </MenuItem>
    //         );
    //       })}
    //     </MenuList>
    //   </Portal>
    // </Menu>
  );
}
