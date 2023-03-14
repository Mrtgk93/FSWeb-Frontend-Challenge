export default function Hero() {
  return (
    <div
      className={
        "flex-col-reverse px-[2rem]   flex xl:flex-row xl:pt-[15.1rem] xl:justify-evenly xl:pl-[16.2rem] xl:pr-[17.1rem] pb-[2rem] xl:pb-[9.4rem] bg-[#F4F4F4]"
      }
    >
      <div
        className={
          "text-left  pl-[1.6rem] xl:pt-[0rem] pt-[2rem] w-[82vw] xl:w-[50vw]"
        }
      >
        <p
          className={
            " font-['Inter'] tracking-widest text-[2rem] leading-[4rem] xl:text-[3rem] xl:mb-[2rem] "
          }
        >
          Hi! 👋
        </p>

        <p
          className={
            " font-['Inter'] xl:tracking-[.01em] font-[500] text-[2rem] xl:text-[4.2rem] xl:leading-[6.4rem] "
          }
        >
          I’m Mert. I’m a front-end{" "}
          <span>
            <div
              className={
                "xl:w-[15.3rem] w-[8rem] ml-[-1rem] mt-[-1.4rem] mb-[-.7rem] h-[2rem] xl:h-[3.2rem] bg-[#FF6961] rounded xl:ml-[-1rem]xl:mb-[-7.2rem] xl:mt-[-2.8rem]"
              }
            ></div>
          </span>
          developer. I can craft solid and scalable frontend products. Let’s
          meet!
          <div className={"flex gap-[2rem] xl:mt-[0rem] mt-[2rem]"}>
            <a
              target="_blank"
              href="https://tr.linkedin.com/in/mert-g%C3%B6k-503563142"
            >
              <img
                className={"xl:mt-[5.6rem]"}
                width="31"
                height="33.95"
                src={"https://cdn-icons-png.flaticon.com/512/2111/2111532.png"}
                link={""}
              />
            </a>
            <a target="_blank" href="https://github.com/Mrtgk93">
              <img
                className={"xl:mt-[5.6rem] "}
                width="34"
                height="36.14"
                src={"https://cdn-icons-png.flaticon.com/512/2111/2111432.png"}
              />
            </a>
          </div>
          <p
            className={
              "xl:text-[1.8rem] text-[1.1rem] xl:leading-[3.2rem] font-['Inter'] xl:tracking-wider mt-[1rem]  xl:mt-[2.5rem]"
            }
          >
            Currently <span className={" text-[#AF0C48]"}>Freelancing</span> for
            <span className={" text-[#AF0C48]"}>
              {" "}
              UX, UI, & Web Design{" "}
            </span>{" "}
            Project .
            <br />
            Invite me to join your team ->{" "}
            <span className={" text-[#AF0C48] underline underline-offset-4"}>
              <a href="mailto:mrtgk93@hotmail.com"> mrtgk93@hotmail.com</a>
            </span>
          </p>
        </p>
      </div>
      <div
        className={
          "flex xl:h-[39%] xl:w-[35vw]  pt-[5.6rem] xl:justify-end  justify-center"
        }
      >
        {/* <div
          className={
            "bg-red-700 w-[34.1rem] h-[34.1rem] mt-[3.6rem] mt-[10rem] ml-[-2rem] rounded-[2.4rem] "
          }
        ></div> */}

        <img
          className={
            " rounded-[2.2rem]  w-[25rem] h-[25rem] xl:w-[34.1rem] xl:h-[34.1rem]   shadow-[-2rem_-2rem_0rem_rgba(250,17,17,0.78)]"
          }
          src="./img/b1455ac9-ecbb-4385-91f4-957c77f9aa44.JPG"
          alt="Image description"
        />
      </div>
    </div>
  );
}
