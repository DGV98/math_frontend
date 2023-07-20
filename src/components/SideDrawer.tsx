import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import SubjectList from "./SubjectList";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Subjects</DrawerHeader>
        <DrawerBody>
          <SubjectList onClose={onClose} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
