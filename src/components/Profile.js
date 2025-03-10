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
              "flex xl:w-[34.5vw] w-[90vw] flex-col pt-[3.6rem] pl-[1rem] xl:pl-[4.3rem] xl:bg-white bg-[#8bd2d892] rounded-[1.2rem] xl:shadow-[9px_9px_0px_rgba(82,82,82,0.5)]  xl:pr-[9.1rem]"
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
                    "text-[1.8rem] font['Inter'] w-[44%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                  }
                >
                  Doğum Tarihi
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
                      "text-[1.8rem] font['Inter'] w-[44%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    İkamet Şehri
                  </p>
                  <p
                    className={
                      "text-[1.8rem] font-['Inter'] w-[52%] font-[400] leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    İstanbul
                  </p>
                </div>
                <div className={"flex pt-[2.1rem]"}>
                  {" "}
                  <p
                    className={
                      "text-[1.8rem] font['Inter'] w-[43vw] xl:w-[10.3vw] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    Eğitim Durumu
                  </p>
                  <p
                    className={
                      "text-[1.8rem] font-['Inter'] w-[55vw] xl:w-[15vw]  xl:pl-[1.2rem] font-[400] leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    Hacettepe Ünv. Biyoloji Lisans, 2016
                  </p>
                </div>
                <div className={"flex pt-[2.1rem] pb-[3.6rem]"}>
                  {" "}
                  <p
                    className={
                      "text-[1.8rem] font['Inter'] w-[44%] font-[600] text-left leading-[2.178rem] tracking-[0.01rem]"
                    }
                  >
                    Tercih Ettiği Rol
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                aut, odit laborum aliquam voluptatum nisi mollitia.{" "}
              </p>{" "}
              <p
                className={
                  "pt-[2.5rem] font-['Inter'] font-[400] text-[1.8rem]"
                }
              >
                {" "}
                Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
                deserunt quam temporibus cumque magnam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
