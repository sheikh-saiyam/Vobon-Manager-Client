import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import logo from "../../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="text-white pt-12 mx-auto w-11/12 md:w-10/12 max-w-screen-2xl">
        <div className="mb-12">
          <div className="text-center">
            <img className="w-52 h-44 mx-auto" src={logo} alt="" />
          </div>

          <div className="text-center w-11/12 md:w-10/12 mx-auto">
            <h1 className="mt-3 text-xl md:text-2xl lg:text-3xl font-bold ">
              Step Into Your Dream Home Now!
            </h1>
            <p className="mt-4 text-white">
              Welcome to Vobon Manager Building, a modern marvel of
              architectural design that stands as a beacon of innovation and
              elegance.
              <span className="hidden md:inline">
                This structure blends timeless sophistication with cutting-edge
                technology, offering a seamless fusion of aesthetics. All corner
                of this building reflects a commitment to sustainability and the
                future of urban living.
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-8 flex-wrap justify-between">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-2 text-xl rounded-full">
                <IoCall />
              </div>
              <p className="text-lg font-medium">+880100-0101010</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-2 text-xl rounded-full">
                <MdEmail />
              </div>
              <p className="text-lg font-medium">info@vobon-manager.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-2 text-xl rounded-full">
                <FaMapMarkerAlt />
              </div>
              <p className="text-lg font-medium">Uttara, Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white">
              <li className="hover:text-white cursor-pointer hover:underline underline-offset-2">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer hover:underline underline-offset-2">
                Apartments
              </li>
              <li className="hover:text-white cursor-pointer hover:underline underline-offset-2">
                Our Team
              </li>
              <li className="hover:text-white cursor-pointer hover:underline underline-offset-2">
                Contact Us
              </li>
              <li className="hover:text-white cursor-pointer hover:underline underline-offset-2">
                Our Services
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-3 text-white">
              <li className="hover:text-white cursor-pointer  hover:underline underline-offset-2">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer  hover:underline underline-offset-2">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer  hover:underline underline-offset-2">
                Cookie Policy
              </li>
              <li className="hover:text-white cursor-pointer  hover:underline underline-offset-2">
                FAQ
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="w-full lg:w-4/12">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-4 text-white">
              Want to be notified about our services? Just sign up and
              we&apos;ll send you a notification by email.
            </p>
            <div className="flex items-center border-2 border-white rounded-full">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent text-white w-git px-4 py-2 outline-none placeholder-white font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mt-8">
          <div className="bg-white text-primary p-2 text-2xl rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300">
            <FaYoutube />
          </div>

          <div className="bg-white text-primary p-2 text-2xl rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300">
            <FaFacebook />
          </div>

          <div className="bg-white text-primary p-2 text-2xl rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300">
            <FaInstagram />
          </div>
        </div>
        <hr className="border border-white mt-6" />
        {/* Footer Bottom */}
        <div className="text-center mt-6 pb-6 text-white font-semibold text-sm">
          <p>©2025 Vobon Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
