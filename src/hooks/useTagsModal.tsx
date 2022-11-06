import * as _ from "../components/Edit/style";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const TagsContainerMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const TagMotion = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2 },
  },
};



function useTagsModal(){
  const [onModal, setOnModal] = useState(false);
  const [tags, setTags] = useState([]);
  return (
    [, setOnModal, tags]
  );
}



export default useTagsModal;