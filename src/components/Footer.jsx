import React from "react"

function Footer() {
  return (
    <div className=" h-[10.75rem] md:-[12.5rem] w-screen mt-36 relative ">
      <span className="block absolute bottom-0 left-0 bg-[url('../images/pattern-hills.svg')] bg-no-repeat bg-cover object-contain h-full w-full "></span>
      {/* icons */}
      <div className="icons absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center space-x-8">
        <a href="https://facebook.com">
          <i className="fab fa-facebook-square text-Grayish_blue text-2xl hover:text-Soft_red cursor-pointer duration-200"></i>
        </a>
        <a href="www.pinterest.com">
          <i className="fab fa-pinterest text-Grayish_blue text-2xl hover:text-Soft_red cursor-pointer duration-200"></i>
        </a>
        <a href="www.instagram.com">
          <i className="fab fa-instagram text-Grayish_blue text-2xl hover:text-Soft_red cursor-pointer duration-200"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
