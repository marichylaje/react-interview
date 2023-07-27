import React from "react";
import { motion } from "framer-motion";

type QuestionSpaceProps = {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
}

  
const FadeInAnim: React.FC<QuestionSpaceProps> = (props) => {
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

export default FadeInAnim;
