"use client";
import { motion as m } from "framer-motion";
import { chart } from "@/components/animation/framer";
import { useContext } from "react";
import CursorContext from "@/lib/context/context";

type Props = {
  chartColor: String;
  width: String;
  shadowColor: String;
};

const ChartRight = ({ chartColor, width, shadowColor }: Props) => {
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <>
      <m.div
        variants={chart}
        initial={chart.initial}
        whileInView={chart.whileInView}
        whileHover={chart.whileHover}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        transition={{ type: "tween" }}
        className={`relative h-10 w-[400px] rounded-[30px] bg-chart_bg-600 p-1 xl:w-[600px]`}
      >
        <div
          className={`w-20p h-8 ${width} ${shadowColor}Glow absolute right-0 rounded-[30px] rounded-l-none ${chartColor}`}
        />
      </m.div>
    </>
  );
};

export default ChartRight;
