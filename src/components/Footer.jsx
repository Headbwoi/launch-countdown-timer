import React from "react"
import Facebook from "../Icons/Facebook"
import Instagram from "../Icons/Instagram"
import Pinterest from "../Icons/Pinterest"

function Footer() {
  return (
    <div className=" h-[10.75rem] md:-[12.5rem] w-screen mt-36 relative ">
      <span className="block absolute bottom-0 left-0 bg-[url('../images/pattern-hills.svg')] bg-no-repeat bg-cover object-contain h-full w-full "></span>
      {/* icons */}
      <div className="icons absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center space-x-8">
        <a href="https://facebook.com">
          <Facebook />
        </a>
        <a href="www.pinterest.com">
          <Pinterest />
        </a>
        <a href="www.instagram.com">
          <Instagram />
        </a>
      </div>
    </div>
  )
}

export default Footer
