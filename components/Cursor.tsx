import { zen_tokyo_zoo } from "@/public/fonts/fonts";
import { motion as m, AnimatePresence } from "framer-motion";
import { IconContext } from "react-icons";

const Cursor = ({
  variants,
  cursorVariant,
  variants3,
  variants4,
  hoverType,
}: { hoverType: JSX.Element; cursorVariant: String } & any) => {
  return (
    <>
      <m.div
        variants={variants}
        animate={cursorVariant}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none cursorr bg-brand_bg-500 "
      />
      <m.div
        variants={variants3}
        animate={cursorVariant}
        transition={{
          type: "spring",
          damping: 11,
          stiffness: 51,
          restDelta: 1.001,
        }}
        className="cursorr pointer-events-none absolute left-0 top-0 h-8 w-8 rounded-full border-[1px] border-brand_bg-500 "
      />
      <AnimatePresence>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <m.div
            variants={variants4}
            animate={cursorVariant}
            transition={{
              type: "spring",
              damping: 11,
              stiffness: 51,
              restDelta: 1.001,
            }}
            exit={{ opacity: 0 }}
            className={`${zen_tokyo_zoo.className} cursorrr pointer-events-none absolute left-0 top-0 hidden h-1 w-1 items-center justify-center rounded-3xl border-[1px] border-brand_bg-300  bg-brand_bg-300/90 font-bold text-[#333333] `}
          >
            {hoverType}
          </m.div>
        </IconContext.Provider>
      </AnimatePresence>
    </>
  );
};

export default Cursor;