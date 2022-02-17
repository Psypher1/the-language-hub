import Link from "next/link";

import { allLangLogos } from "@utils/learn/langLogos";

// ChakraUI Imports
// import { useDisclosure, Button } from "@chakra-ui/react";
// import { XIcon, MenuIcon } from "@heroicons/react/outline";

export default function NavDropDown() {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {/* <button className>
        <i className="fas fa-bars"></i>
      </button> */}
      {allLangLogos.map((logo, index) => {
        const learPath = logo.langPath.toLowerCase();
        return (
          <Link key={index} href={`/${learPath}/basics`} passHref>
            <a className="mb-2 flex cursor-pointer items-center space-x-2">
              <img src={logo.logoURL} className="h-5 w-5" />
              <span>{logo.langPath}</span>
            </a>
          </Link>
        );
      })}
    </div>
  );
}
