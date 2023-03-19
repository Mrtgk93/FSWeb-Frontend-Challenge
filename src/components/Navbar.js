import React from "react";

const Navbar = (props) => {
  const toggleMode = (e) => {
    e.preventDefault();
    props.setGeceModu(!props.geceModu);
  };

  return (
    <nav className=" navbar fixed top-0 w-full flex h-[7rem]  text-white bg-slate-700 justify-between px-[3rem] xl:px-[5rem] lg:px-[5rem] md:px-[5rem] sm:px-[5rem] items-center">
      <h1 className="text-[2rem] font-[600] font-['Playfair_Display']">
        MERT GÖK - CV
      </h1>
      <div className="flex w-[15rem] items-center justify-around">
        {" "}
        <img width="30" src="./img/brightness.png" />
        <div className=" bg-[#4a5058] rounded-[5rem] border-x-slate-800 h-[2.2rem] relative w-[6rem] ">
          <div
            onClick={toggleMode}
            className={props.geceModu ? "toggle toggled" : "toggle"}
          />
        </div>
        <img width="25" src="./img/sleep-mode.png" />
      </div>
    </nav>
  );
};

export default Navbar;
