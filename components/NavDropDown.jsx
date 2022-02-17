import Link from "next/link";

import { allLangLogos } from "@utils/learn/langLogos";

// ChakraUI Imports
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
  Button,
  PortalManager,
  Portal,
  IconButton,
} from "@chakra-ui/react";

// import { XIcon, MenuIcon } from "@heroicons/react/outline";

export default function NavDropDown() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        as={IconButton}
        _hover={{ bg: "blue.100" }}
        _focus={{ bg: "blue.100" }}
        px={8}
        py={4}
        fontSize={{ fontSize: "1.25rem" }}
        transition="all 0.2s"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <i className="fa-solid fa-chevron-down text-xl transition duration-300 hover:bg-sky-200 focus:bg-sky-200"></i>
      </MenuButton>

      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        {allLangLogos.map((logo, index) => {
          const learPath = logo.langPath.toLowerCase();
          return (
            <MenuItem key={index} _hover={{ bg: "blue.100" }}>
              <Link key={index} href={`/${learPath}/basics`}>
                <a className="mb-2 flex cursor-pointer items-center space-x-2">
                  <img src={logo.logoURL} className="h-5 w-5" />
                  <span>{logo.langPath}</span>
                </a>
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
