import { motion } from "framer-motion";

const AnimatedAtom = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 512 512"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear"
      }}
    >
      <motion.path
        d="M412.927,255.999c8.895-9.768,16.941-19.581,24.003-29.338c31.637-43.711,40.227-81.792,24.186-107.226..."
        fill="#26150C"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      {/* Add additional paths similarly if there are multiple paths */}
    </motion.svg>
  );
};

export default AnimatedAtom;
