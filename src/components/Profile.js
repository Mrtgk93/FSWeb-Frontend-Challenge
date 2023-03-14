export default function Profile() {
  return (
    <div
      className={
        "bg-[#F4F4F4] py-[2rem] xl:py-[7.2rem] xl:pl-[19.3rem] px-[2rem] xl:pr-[21.6rem]"
      }
    >
      <div className={"flex  flex-col"}>
        <p
          className={
            "font-['Inter']  font-[500] xl:pl-[1.7rem] text-[3.6rem] pb-[1rem] xl:pb-[0rem] tracking-[0.1rem] leading-[4.357rem]"
          }
        >
          Profile
        </p>
        <div className={"flex xl:pt-[3.6rem]  xl:flex-row  flex-col "}>
          <div
            className={
              "flex xl:w-[34.5vw] w-[92vw] flex-col pt-[3.6rem] pl-[1rem] xl:pl-[4.3rem] xl:bg-white bg-[#8bd2d892] rounded-[1.2rem] xl:shadow-[9px_9px_0px_rgba(82,82,82,0.5)]  xl:pr-[9.1rem]"
            }
          >
            <p
              className={
                "font-['Playfair_Display']  text-left  font-[400] text-[#d9333b] xl:text-[#EA2678] leading-[3.2rem] text-[2.4rem]"
              }
            >
              Basic Information
            </p>
            <div className={"flex flex-col text-left  pt-[3.7rem]"}>
              <div className={"flex "}>
                <p
                  className={
                    "text-[1.8rem] font['Inter'] w-[48%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                  }
                >
                  Date of birth
                </p>
                <p
                  className={
                    "text-[1.8rem] font-['Inter'] w-[52%]  font-[400] leading-[2.178rem] tracking-[0.01rem]"
                  }
                >
                  01.10.1993
                </p>
              </div>
              <div>
                <div className={"flex pt-[2.1rem]"}>
                  <p
                    className={
                      "text-[1.8rem] font['Inter'] w-[48%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    City of Residence
                  </p>
                  <p
                    className={
                      "text-[1.8rem] font-['Inter'] w-[52%] font-[400] leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    Istanbul
                  </p>
                </div>
                <div className={"flex  pt-[2.1rem]"}>
                  {" "}
                  <p
                    className={
                      "text-[1.8rem] font['Inter'] w-[43vw] xl:w-[12vw] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    Education Status
                  </p>
                  <p
                    className={
                      "text-[1.8rem] font-['Inter'] w-[46vw] xl:w-[15vw]  xl:pl-[1.2rem] font-[400] leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    Gazi Uni Energy Eng. B.Sc. 2017
                  </p>
                </div>
                <div className={"flex pt-[2.1rem] pb-[3.6rem]"}>
                  {" "}
                  <p
                    className={
                      "text-[1.8rem] font['Inter'] w-[48%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    Preferred Position
                  </p>
                  <p
                    className={
                      "text-[1.8rem] font-['Inter'] w-[52%] font-[400] leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    Frontend, UI
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={"xl:w-[36.5vw] w-[94vw] "}>
            <div className={"xl:pl-[7rem] pl-[2rem] text-left pt-[3.7rem] "}>
              <p
                className={
                  "text-[2.4rem]  font-[400] leading-[3.2rem] tracking-[0.01em] font-['Playfair_Display']"
                }
              >
                About me
              </p>
              <span>
                <div
                  className={
                    "bg-[#82BBFF] w-[9rem] h-[1.8rem] rounded-[.4rem] mx-[-1.2rem] my-[-1.5rem]"
                  }
                ></div>
              </span>
              <p
                className={
                  "pt-[3.4rem] font-['Inter'] font-[400] text-[1.8rem]"
                }
              >
                My name is Mert Gök. I am 29 years old. I studied Energy
                engineering at Gazi University and I graduated in 2017.{" "}
              </p>{" "}
              <p
                className={
                  "pt-[2.5rem] font-['Inter'] font-[400] text-[1.8rem]"
                }
              >
                {" "}
                I love learning new things and doing research, which led me to
                embark on a journey in software development. Additionally, I
                enjoy flying drones and capturing unique photographs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
