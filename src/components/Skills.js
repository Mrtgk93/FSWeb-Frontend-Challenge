export default function Skills({ geceModu }) {
  return (
    <div
      className={
        " 2xl:w-[100vw] xl:w-[100vw]  px-[.5rem] xl:px[0rem]  xl:h-[49rem]"
      }
    >
      <div
        className={
          "xl:pb-[13rem]   pt-[2rem] xl:pt-[8rem] xl:pr-[20rem] xl:pl-[19.9rem]"
        }
      >
        <p
          className={
            " text-[3rem] xl:text-[4.8rem] 2xl:pb-[5rem] md:pb-[3rem] font-['Inter'] xl:leading-[58.09px] xl:tracking-[0.01em]"
          }
        >
          Skills
        </p>
        <div
          className={
            geceModu
              ? "flex flex-wrap lg:px-[5rem] md:px-[5rem]  font-[500] text-[#ffffff] text-[1.5rem] xl:text-[2.4rem] justify-between leading-[36px] "
              : "flex flex-wrap lg:px-[5rem] md:px-[5rem]  font-[500] text-[#777777] text-[1.5rem] xl:text-[2.4rem] justify-between leading-[36px] "
          }
        >
          <div className={"flex-col "}>
            <img
              className={"xl:pt-[2.8rem]  xl:pl-[1rem]   "}
              src={"./img/js-logo.png"}
            />
            <p className={"tracking-normal font-['Inter'] xl:mt-[1rem] "}>
              JAVASCRIPT
            </p>
          </div>

          <div>
            <img
              className={"xl:pt-[2.8rem]  "}
              src={"./img/Rectangle 35.png"}
            />
            <p className={"xl:mt-[1rem]"}>REACT</p>
          </div>
          <div>
            <img
              className={"xl:pt-[2.8rem]   "}
              src={"./img/redux.png"}
              link={""}
            />
            <p className={"xl:mt-[1rem] font-['Inter'] "}>REDUX</p>
          </div>
          <div>
            {" "}
            <img
              className={"xl:pt-[2.8rem]  "}
              src={"./img/node.png"}
              link={""}
            />
            <p className={"xl:mt-[1rem] font-['Inter'] "}>NODE</p>
          </div>
          <div>
            {" "}
            <img
              className={"xl:pt-[2.8rem] ]"}
              src={"./img/vscode.png"}
              link={""}
            />
            <p className={"xl:mt-[1rem] font-['Inter'] "}>VS CODE</p>
          </div>
          <div>
            <img
              className={"xl:pt-[2.8rem] "}
              src={"./img/figma.png"}
              link={""}
            />
            <p className={"xl:mt-[1rem] font-['Inter'] "}>FIGMA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
