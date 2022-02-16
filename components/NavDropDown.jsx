// ChakraUI Imports
import { useDisclosure, Button } from "@chakra-ui/react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";

export default function NavDropDown() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <button className>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}
