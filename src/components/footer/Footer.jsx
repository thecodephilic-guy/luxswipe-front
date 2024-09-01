import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import building from "../../assets/buildings-fill.svg";
import location from "../../assets/Location.svg";
import mail from "../../assets/Mail.svg";
import linkedin from "../../assets/linkedin.svg";
import Logo from "../../assets/Logo.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  const { username } = useParams();
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`${
        username ? "hidden" : ""
      } bg-mystic shadow-cn py-12 font-poppins text-contrast-3`}
    >
      <div className="container mx-auto px-10 md:px-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4 order-2 md:order-1 md:ml-40">
            <div className="hidden md:block">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <div className="flex items-center mt-2">
                <img className="w-5 h-5 mr-2" src={mail} alt="Email" />
                <p>hello@luxswipe.in</p>
              </div>
              <div className="flex items-center mt-2">
                <img className="w-5 h-5 mr-2" src={location} alt="Location" />
                <p>Bareilly, Uttar Pradesh, 243006</p>
              </div>
              <div className="flex items-center mt-2">
                <img className="w-5 h-5 mr-2" src={building} alt="Company" />
                <p>Swipe Industries</p>
              </div>
            </div>
            <div className="md:hidden">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p>hello@luxswipe.in</p>
              <p>Bareilly, Uttar Pradesh, 243006</p>
            </div>
            <img className="w-12 md:w-14" src={Logo} alt="Luxswipe Logo" />
            <h2 className="text-1xl font-bold mt-2 md:mt-4">Luxswipe</h2>
          </div>

          {/* Right Section - Hidden on Mobile */}
          <div
            className={`w-full md:w-1/2 flex flex-col items-center md:items-end space-y-2 order-1 md:order-2 ${
              isVisible ? "block" : "hidden"
            } md:block`}
          >
            <h3 className="text-xl font-bold mb-2">Follow Us On</h3>

            <Link
              to="https://www.linkedin.com/company/luxswipe/?viewAsMember=true"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center">
                <img className="w-6 h-5 mr-2" src={linkedin} alt="LinkedIn" />
                LinkedIn
              </div>
            </Link>
            <Link
              to="https://www.instagram.com/lux_swipe/"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center">
                <img
                  className="w-6 h-5 mr-2 mt-2"
                  src={instagram}
                  alt="Instagram"
                />
                Instagram
              </div>
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCpP2x2FLcrkOC4vcQVml-ZA"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center mt-2">
                <img className="w-6 h-6 mr-2" src={youtube} alt="YouTube" />
                YouTube
              </div>
            </Link>
              <div className="flex">
                <p className="text-xl font-semibold md:text-left mt-8">
                  Signup now and say
                  <br />
                  goodbye to "link in bio"
                </p>
              </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px my-8 bg-base-1 opacity-50 pl-6"></div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-contrast-1">
        <p>© 2024 Swipe Industries Private Limited. All rights reserved.</p>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;

{
  /* <div className="container mx-auto flex flex-wrap justify-center my-5">
  {/*  Logo */
}
{
  /* <div className="footer-column mb-4 lg:w-1/4 lg:mb-10">
  <img src={logo} alt="Logo" className="lg:w-24 w-16" />
</div>; */
}
{
  /* <!-- Navigation Links --> 
  <div className="footer-column mb-4 lg:w-1/4 lg:mb-0 mx-5">
    <ul className="text-center">
      <li className="mb-2">
        <a href="#" className="hover:text-gray-400">
          Home
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="hover:text-gray-400">
          About
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="hover:text-gray-400">
          Services
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="hover:text-gray-400">
          Contact
        </a>
      </li>
    </ul>
  </div>
  {/* <!-- Contact Info --> 
  <div className="footer-column mb-4 lg:w-1/4 lg:mb-0">
    <p className="text-center">123 Street Name</p>
    <p className="text-center">City, Country</p>
    <p className="text-center">Phone: 123-456-7890</p>
    <p className="text-center">Email: info@example.com</p>
  </div>
  {/* Social Links  
  <div className="footer-column lg:w-1/4 lg:hidden">
    <ul className="flex justify-center">
      <li className="mx-2">
        <a href="#" className="text-xl hover:text-gray-400">
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li className="mx-2">
        <a href="#" className="text-xl hover:text-gray-400">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="mx-2">
        <a href="#" className="text-xl hover:text-gray-400">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  </div>
</div> */
}
