import { data } from "./data";

export default function Projects() {
  return (
    <div
      className={
        "flex pt-[2rem] xl:pt-[9.3rem] px-[1rem] xl:pl-[19.3rem] pb-[2rem] xl:pb-[11rem] xl:pr-[18.3rem] flex-col"
      }
    >
      <h2
        className={
          "text-[3.6rem]  font-['Inter'] leading-[4.357rem] font-[500]"
        }
      >
        Projects
      </h2>
      <div
        className={
          "xl:flex xl:flex-row flex-col gap-[6.4rem] pt-[1.5rem] xl:pt-[3.6rem] "
        }
      >
        {data.projects.map((item) => (
          <div key={item.id} className={item.class}>
            <p
              className={
                "font-['Playfair_Display'] pl-[2rem] xl:pl-[4rem] pt-[4.6rem] text-left leading-[3.86rem] tracking-wider font-[700] text-[2.9rem]"
              }
            >
              {item.name}
            </p>
            <p
              className={
                " pl-[2rem] pr-[1rem] xl:pr-[0rem] xl:pl-[4rem] pt-[1.9rem] xl:w-[32vw] leading-[2.4rem] font-['Inter'] font-[400] text-[1.6rem] text-left"
              }
            >
              {item.text}
            </p>
            <div
              className={
                "flex flex-wrap pl-[2rem] w-[86vw] xl:w-[25vw]  xl:pl-[4rem] gap-[.9rem] pt-[2.7rem]"
              }
            >
              {item.skils.map((s) => (
                <p
                  className={
                    " bg-white font-['Playfair_Display'] font-[700] text-[1.6rem] tracking-wider leading-[1.6rem] rounded-[7.6rem] px-[2rem] pt-[.6rem] pb-[1rem]"
                  }
                >
                  {s}
                </p>
              ))}
            </div>

            <div
              className={
                "flex  pl-[2rem] justify-between xl:pr-[4.9rem] xl:gap-[15rem] pt-[3.5rem] xl:pl-[4rem]"
              }
            >
              <a
                target="_blank"
                href={item.gitlink}
                className={
                  "font-[600] font-['Inter'] text-[2rem] leading-[3rem] "
                }
              >
                View on Github
              </a>
              <a
                target="_blank"
                href={item.applink}
                className={
                  "font-[600] font-['Inter'] text-[2rem] pr-[2.5rem] xl:pr-[0rem] leading-[3rem] "
                }
              >
                Go to app->
              </a>
            </div>
            <div className={" pt-[3.5rem] xl:pt-[5.9rem]"}>
              <img src={item.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
