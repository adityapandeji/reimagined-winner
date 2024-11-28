import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo_ from "../../assets/Logo/developer.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800 flex flex-col">
      <div className="w-11/12 max-w-maxContent mx-auto py-14">
        <div className="border-b border-richblack-700 pb-5">
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col lg:flex-row justify-between lg:border-r lg:border-richblack-700 pr-0 lg:pr-5">
              <div className="flex flex-col gap-3 lg:w-[30%] mb-7">
                <div className="flex items-center text-white font-bold">
                  <img src={Logo_} alt="" className="h-10 w-10 object-contain" />
                  <h3 className="ml-2">ACADEMIX</h3>
                </div>
                <h1 className="text-white font-semibold text-[16px]">
                  Company
                </h1>
                <div className="flex flex-col gap-2">
                  {["About", "Careers", "Affiliates"].map((ele, i) => (
                    <Link
                      key={i}
                      to={ele.toLowerCase()}
                      className="text-white text-[14px] cursor-pointer hover:text-gray-300 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
                <div className="flex gap-3 text-xl text-white">
                  <FaFacebook />
                  <FaGoogle />
                  <FaTwitter />
                  <FaYoutube />
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:w-[30%] mb-7">
                <h1 className="text-white font-semibold text-[16px]">
                  Resources
                </h1>
                <div className="flex flex-col gap-2">
                  {Resources.map((ele, index) => (
                    <Link
                      key={index}
                      to={ele.split(" ").join("-").toLowerCase()}
                      className="text-white text-[14px] cursor-pointer hover:text-gray-300 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
                <h1 className="text-white font-semibold text-[16px] mt-7">
                  Support
                </h1>
                <Link
                  to="/help-center"
                  className="text-white text-[14px] cursor-pointer hover:text-gray-300 transition-all duration-200 mt-2"
                >
                  Help Center
                </Link>
              </div>

              <div className="flex flex-col gap-3 lg:w-[30%] mb-7">
                <h1 className="text-white font-semibold text-[16px]">
                  Plans
                </h1>
                <div className="flex flex-col gap-2 mt-2">
                  {Plans.map((ele, index) => (
                    <Link
                      key={index}
                      to={ele.split(" ").join("-").toLowerCase()}
                      className="text-white text-[14px] cursor-pointer hover:text-gray-300 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
                <h1 className="text-white font-semibold text-[16px] mt-7">
                  Community
                </h1>
                <div className="flex flex-col gap-2 mt-2">
                  {Community.map((ele, index) => (
                    <Link
                      key={index}
                      to={ele.split(" ").join("-").toLowerCase()}
                      className="text-white text-[14px] cursor-pointer hover:text-gray-300 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 pl-0 lg:pl-5">
              {FooterLink2.map((ele, i) => (
                <div key={i} className="mb-4">
                  <h1 className="text-white font-semibold text-[16px]">
                    {ele.title}
                  </h1>
                  <div className="flex flex-row flex-wrap items-center gap-2 mt-2">
                    {ele.links.map((link, index) => (
                      <Link
                        key={index}
                        to={link.link}
                        className="text-white text-[14px] cursor-pointer hover:text-gray-300 transition-all duration-200"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center text-white text-sm py-5 px-2">
          <div className="flex flex-row gap-3 items-center">
            {BottomFooter.map((ele, i) => (
              <Link
                key={i}
                to={ele.split(" ").join("-").toLowerCase()}
                className={`px-3 ${
                  i !== BottomFooter.length - 1 ? "border-r border-white" : ""
                } cursor-pointer hover:text-gray-300 transition-all duration-200`}
              >
                {ele}
              </Link>
            ))}
          </div>
          <div className="text-center mt-3 md:mt-0 flex flex-row gap-1">
            Made with ❤️ By Manish © 2024 <img src={Logo_} className="h-4" alt="Academix Logo" /> ACADEMIX
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
