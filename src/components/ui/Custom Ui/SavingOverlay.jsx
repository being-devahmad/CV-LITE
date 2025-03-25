import { motion, AnimatePresence } from "framer-motion";

const SavingOverlay = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="w-screen h-screen fixed top-0 bg-platformGreen/80 z-[1000] flex items-center justify-center text-[7vw] md:text-[4.5vw] lg:text-[1.5vw] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white flex items-center gap-1">
            Saving
            <motion.span
              className="inline-block"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              .
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              .
            </motion.span>
            <motion.span
              className="inline-block"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              .
            </motion.span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SavingOverlay;
