import React from "react";
import { motion } from "framer-motion";

type WithFadeInAnimProps = {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
}

  
const WithFadeInAnim: React.FC<WithFadeInAnimProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: props.duration, delay: props.delay }}
    >
      {props.children}
    </motion.div>
  );
};

export default WithFadeInAnim;
