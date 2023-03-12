export default function Skills() {
  return (
    <div className={"xl:w-[144rem] xl:h-[49rem]"}>
      <div
        className={"xl:pb-[13rem] xl:pt-[8rem] xl:pr-[26rem] xl:pl-[25.9rem]"}
      >
        <p
          className={
            " text-[3rem] xl:text-[4.8rem] font-['Inter'] xl:leading-[58.09px] xl:tracking-[0.01em]"
          }
        >
          Skills
        </p>
        <div
          className={
            "flex font-[500] text-[#777777] text-[1rem] xl:text-[2.4rem] justify-between leading-[36px] "
          }
        >
          <div className={"flex-col "}>
            <img
              className={"xl:pt-[5.6rem] xl:pl-[1rem]  "}
              src={"./img/js-logo.png"}
            />
            <p className={"tracking-normal font-['Inter'] xl:mt-[1rem] "}>
              JAVASCRIPT
            </p>
          </div>

          <div>
            <img className={"xl:pt-[5.6rem] "} src={"./img/Rectangle 35.png"} />
            <p className={"xl:mt-[1rem]"}>REACT</p>
          </div>
          <div>
            <img
              className={"xl:pt-[5.6rem]  "}
              src={"./img/redux.png"}
              link={""}
            />
            <p className={"xl:mt-[1rem] font-['Inter'] "}>REDUX</p>
          </div>
          <div>
            {" "}
            <img
              className={"xl:pt-[5.6rem]  "}
              src={"./img/node.png"}
              link={""}
            />
            <p className={"xl:mt-[1rem] font-['Inter'] "}>NODE</p>
          </div>
          <div>
            {" "}
            <img
              className={"xl:pt-[5.6rem] "}
              src={"./img/vscode.png"}
              link={""}
            />
            <p className={"xl:mt-[1rem] font-['Inter'] "}>VS CODE</p>
          </div>
          <div>
            <img
              className={"xl:pt-[5.6rem] "}
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
