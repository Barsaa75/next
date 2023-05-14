import { motion as m } from "framer-motion";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import Link from "next/link";

const HeaderSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext); // Access textEnter and textLeave from CursorContext
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-10 h-[80px] w-full px-8 py-6 backdrop-blur`}
      >
        <div className="container flex justify-between ">Hi llra</div>
      </div>
    </>
  );
};

export default HeaderSection;
