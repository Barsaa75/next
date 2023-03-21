import "@/public/css/mainSection.css";
import Qna from "./qna/Qna";
import Skills from "./skills/Skills";

const MainSection = () => {
  return (
    <>
      <div
        id="main"
        className="flex h-screen flex-col items-center justify-center "
      >
        <div className="container flex w-full justify-around ">
          <Qna />
          <Skills />
        </div>
      </div>
      <div className="container">
        <div className=" grid h-screen grid-cols-2 grid-rows-2 gap-10  py-10">
          <div className="col-start-1 col-end-3 bg-brand_bg-500/30">1</div>
          <div className="col-start-1 col-end-2 bg-brand_bg-500/30">2</div>
          <div className="col-start-2 col-end-3 bg-brand_bg-500/30">3</div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
