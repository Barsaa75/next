"use client";
import { IconContext } from "react-icons";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";
import { motion as m } from "framer-motion";
import { HoverTypeContext } from "@/lib/context/HoverTypeContext";
import { MdContentCopy } from "react-icons/md";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const FooterSection = () => {
  const { textEnter, textLeave } = useContext(CursorContext);
  const { setHoverType } = useContext(HoverTypeContext);
  const mailHandleCopy = () => {
    navigator.clipboard.writeText("themuln.official@gmail.com");
  };
  const phoneHandleCopy = () => {
    navigator.clipboard.writeText("+97688650115");
  };
  const mailHandleMouseEnter = () => {
    textEnter();
    setHoverType(<MdContentCopy />);
  };
  const gitHandleHover = () => {
    textEnter();
    setHoverType(<FiGithub />);
  };
  const phoneHandleMouseEnter = () => {
    textEnter();
    setHoverType(<HiOutlinePhoneOutgoing />);
  };
  return (
    <div id="footer" className="flex flex-col justify-end h-fit">
      <div className="text-brand_main-500 bg-brand_bg-800/5">Hi</div>
    </div>
  );
};

export default FooterSection;
