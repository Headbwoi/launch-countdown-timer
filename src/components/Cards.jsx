const Cards = (props) => {
  return (
    <div className="flex items-center justify-center space-x-[1rem] sm:justify-center md:justify-start md:space-x-[1.975rem]">
      {/* card one */}
      <div className="block">
        <div className="grid place-items-center bg-Dark_desaturated_blue w-cardMobile h-cardMobile md:w-cardDesktop md:h-cardDesktop mb-[0.875rem] md:mb-7 rounded-lg relative shadow-mobile md:shadow-desktop z-30">
          <span className="block absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-r-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-l-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-full h-1 bg-black_blue/10"></span>
          <p className="text-Soft_red text-[28px] md:text-[4.75rem] font-bold font-redHat pl-0.5">
            {props.count.days.toString().padStart(2, "0")}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-Very_dark_blue/30 -z-10"></div>
          </p>
        </div>
        <p className="text-center uppercase text-[9px] md:text-xs text-Grayish_blue font-bold font-redHat tracking-[3.75px] md:tracking-[7px]">
          Days
        </p>
      </div>

      {/* card two */}
      <div className="block">
        <div className="grid place-items-center bg-Dark_desaturated_blue w-cardMobile h-cardMobile md:w-cardDesktop md:h-cardDesktop mb-[0.875rem] md:mb-7 rounded-lg relative shadow-mobile md:shadow-desktop z-30">
          <span className="block absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-r-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-l-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-full h-1 bg-black_blue/10"></span>
          <p className="text-Soft_red text-[28px] md:text-[4.75rem] font-bold font-redHat pl-0.5">
            {props.count.hours.toString().padStart(2, "0")}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-Very_dark_blue/30 -z-10"></div>
          </p>
        </div>
        <p className="text-center uppercase text-[9px]  md:text-xs text-Grayish_blue font-bold font-redHat tracking-[3.75px] md:tracking-[7px] ">
          hours
        </p>
      </div>

      {/* card three */}
      <div className="block">
        <div className="grid place-items-center bg-Dark_desaturated_blue w-cardMobile h-cardMobile md:w-cardDesktop md:h-cardDesktop mb-[0.875rem] md:mb-7 rounded-lg relative shadow-mobile md:shadow-desktop z-30">
          <span className="block absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-r-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-l-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-full h-1 bg-black_blue/10"></span>
          <p className="text-Soft_red text-[28px] md:text-[4.75rem] font-bold font-redHat pl-0.5">
            {props.count.minutes.toString().padStart(2, "0")}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-Very_dark_blue/30 -z-10"></div>
          </p>
        </div>
        <p className="text-center uppercase text-[9px] md:text-xs text-Grayish_blue font-bold font-redHat tracking-[3.75px] md:tracking-[7px]">
          minutes
        </p>
      </div>

      {/* card four */}
      <div className="block">
        <div className="grid place-items-center bg-Dark_desaturated_blue w-cardMobile h-cardMobile md:w-cardDesktop md:h-cardDesktop mb-[0.875rem] md:mb-7 rounded-lg relative shadow-mobile md:shadow-desktop z-30">
          <span className="block absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-r-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-3 bg-black_blue rounded-l-full"></span>
          <span className="block absolute top-1/2 right-0 -translate-y-1/2 w-full h-1 bg-black_blue/10"></span>
          <p className="text-Soft_red text-[28px] md:text-[4.75rem] font-bold font-redHat pl-0.5">
            {props.count.seconds.toString().padStart(2, "0")}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-Very_dark_blue/30 -z-10"></div>
          </p>
        </div>
        <p className="text-center uppercase text-[9px] md:text-xs  text-Grayish_blue font-bold font-redHat tracking-[3.75px] md:tracking-[7px]">
          seconds
        </p>
      </div>
    </div>
  )
}

export default Cards
