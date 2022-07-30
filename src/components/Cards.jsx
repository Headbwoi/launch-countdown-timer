const Cards = () => {
  return (
    <div className="flex items-center justify-between">
      {/* card one */}
      <div className="block">
        <div className="grid place-items-center bg-Dark_desaturated_blue w-cardMobile h-cardMobile md:w-cardDesktop md:h-cardDesktop mb-[0.875rem] md:mb-7 rounded-lg relative shadow-mobile md:shadow-desktop">
          <span className="block absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-r-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-l-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-full h-0.5 bg-black_blue/20"></span>
          <p className="text-Soft_red text-[28px] md:text-[62px] font-bold font-redHat">
            08
          </p>
        </div>
        <p className="text-center uppercase text-[9px] md:text-sm text-Grayish_blue font-bold tracking-[3.5px] md:tracking-[7px]">
          Days
        </p>
      </div>

      {/* card two */}
      <div className="block">
        <div className="grid place-items-center bg-Dark_desaturated_blue w-cardMobile h-cardMobile md:w-cardDesktop md:h-cardDesktop mb-[0.875rem] md:mb-7 rounded-lg relative shadow-mobile md:shadow-desktop">
          <span className="block absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-r-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-l-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-full h-0.5 bg-black_blue/20"></span>
          <p className="text-Soft_red text-[28px] md:text-[62px] font-bold font-redHat">
            23
          </p>
        </div>
        <p className="text-center uppercase text-[9px] md:text-sm text-Grayish_blue font-bold tracking-[3.5px] md:tracking-[7px]">
          Hours
        </p>
      </div>

      {/* card two */}
      <div className="block">
        <div className="grid place-items-center bg-Dark_desaturated_blue w-cardMobile h-cardMobile md:w-cardDesktop md:h-cardDesktop mb-[0.875rem] md:mb-7 rounded-lg relative shadow-mobile md:shadow-desktop">
          <span className="block absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-r-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-l-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-full h-0.5 bg-black_blue/20"></span>
          <p className="text-Soft_red text-[28px] md:text-[62px] font-bold font-redHat">
            55
          </p>
        </div>
        <p className="text-center uppercase text-[9px] md:text-sm text-Grayish_blue font-bold tracking-[3.5px] md:tracking-[7px]">
          Minutes
        </p>
      </div>

      {/* card two */}
      <div className="block">
        <div className="grid place-items-center bg-Dark_desaturated_blue w-cardMobile h-cardMobile md:w-cardDesktop md:h-cardDesktop mb-[0.875rem] md:mb-7 rounded-lg relative shadow-mobile md:shadow-desktop">
          <span className="block absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-r-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-l-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-full h-0.5 bg-black_blue/20"></span>
          <p className="text-Soft_red text-[28px] md:text-[62px] font-bold font-redHat">
            41
          </p>
        </div>
        <p className="text-center uppercase text-[9px] md:text-sm text-Grayish_blue font-bold tracking-[3.5px] md:tracking-[7px]">
          Seconds
        </p>
      </div>
    </div>
  )
}

export default Cards
