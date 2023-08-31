import React from "react";
import { motion } from "framer-motion";

export type WithBounceVerticallyAnimProps = {
    children: React.ReactNode;
}

  
const WithBounceVerticallyAnim: React.FC<WithBounceVerticallyAnimProps> = (props) => {
  return (
    <motion.div
        initial={{ opacity: 0, rotate: -90, x: -100 }}
        animate={{
            opacity: 1,
            rotate: [0, -45, 45, -15, 15, 0],
            x: [0, -50, 50, -20, 20, 0],
        }}
        transition={{
            duration: 1,
            ease: "easeInOut",
        }}
    >
      {props.children}
    </motion.div>
  );
};

export default WithBounceVerticallyAnim;
