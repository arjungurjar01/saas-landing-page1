import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import logo from "../assets/logo.avif";

function FooterSection() {
  return (
    <div className="md pt-10  px-20 rounded-t-4xl bg-gradient-to-r from-[#fc32a4] from-20% via-[#fd83ed]  to-[#fe92cf]">
      <div className="flex flex-col md:flex-row justify-around text-white ">
        <div className="flex flex-col gap-4">
          <div>
            <img className="w-28" src={logo} alt="" />
          </div>
          <div className="w-64 ">
            Creating professional, high-converting ads has never been easier.
            Transform your marketing with AI.
          </div>
          <div className="flex gap-4 cursor-pointer">
            <FaInstagram className="text-2xl text-white" />{" "}
            <FaFacebook className="text-2xl text-white" />{" "}
            <FaYoutube className="text-2xl text-white" />{" "}
            <FaTiktok className="text-2xl text-white" />{" "}
          </div>
        </div>
        <div className="mt-10 md:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <ul className="flex flex-col gap-4">
              <li className="font-semibold">Products</li>
              <li>Ad Generator</li>
              <li>Product Video</li>
              <li>Image Generator</li>
              <li>Photo Editor</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li className="font-semibold">Company</li>
              <li>Pricing</li>
              <li>FAQs</li>
              <li>Contact</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="mt-2">
            <ul className="flex flex-col gap-4">
              <li className="font-semibold">Legal</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-1/2 text-white opacity-30  md:ml-10 lg:ml-44 mt-4 md:mt-18" />
      <div className="flex text-white text-center sm:pl-6 md:pl-10 lg:pl-44 pt-4 md:pt-8 pb-8">
        <p>
          © 2025 Mintly. All rights reserved. Design inspired by{" "}
          <span className="font-medium">
            {" "}
            <a href="https://usemintly.com/" target="_blank">
              [Mintly]
            </a>
          </span>
          . Built for educational purposes only.
        </p>
      </div>
    </div>
  );
}

export default FooterSection;
