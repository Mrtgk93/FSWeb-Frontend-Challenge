export default function Footer() {
  return (
    <div className="xl:px-[34.1rem] justify-center pb-[4rem] xl:pb-[18rem] flex gap-[2rem] xl:gap-[5.8rem]">
      <div className="xl:w-[40vw]">
        <p
          className={
            "xl:text-[4.2rem]  font-['Inter'] font-[500] pt-[1rem] xl:pl-[0.6rem] xl:leading-[6.3rem] tracking-[0.01em] text-right"
          }
        >
          Let's work together on
          <span>
            <div
              className={
                "xl:w-[27rem] w-[6.5rem] mt-[-.6rem] ml-[3rem] mb-[-1.5rem] h-[.4rem] xl:h-[1.8rem] bg-[#82BBFF] rounded-[.4rem] xl:ml-[21rem] xl:mb-[-6.1rem] xl:mt-[-2.2rem]"
              }
            ></div>
          </span>{" "}
          <br /> your next product.
        </p>
      </div>
      <div className="xl:pl-[.4rem] xl:w-[12vw] xl:pt-[.3rem]">
        <p
          className={
            "xl:text-[2.4rem]  text-[#1769FF] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]"
          }
        >
          <a target="_blank" href="https://github.com/Mrtgk93">
            Github
          </a>
        </p>
        <p
          className={
            "xl:text-[2.4rem] text-[#0A0A14] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]"
          }
        >
          Personal Blog
        </p>
        <p
          className={
            "xl:text-[2.4rem] text-[#0077B5] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]"
          }
        >
          <a
            target="_blank"
            href="https://tr.linkedin.com/in/mert-g%C3%B6k-503563142"
          >
            Linkedin
          </a>
        </p>
        <p
          className={
            "xl:text-[2.4rem] text-[#AF0C48] text-left xl:leading-[2.9rem] font-['Inter'] font-[500]"
          }
        >
          <a href="mailto:mrtgk93@hotmail.com">Email</a>
        </p>
      </div>
    </div>
  );
}
