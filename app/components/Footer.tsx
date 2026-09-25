import Image from "next/image";
import FooterLogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-t-[#1c1f26]">
      <div className="w-[95%] md:w-[85%] lg:w-[85%] mx-auto flex items-center flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between">
        <div className="flex gap-2 items-center">
          <Image src={FooterLogo} className="w-9" alt="fit log footer logo" />
          <h2 className="font-bold font-oswald text-xl">FITLOG</h2>
        </div>
        <p className="text-[#6B7280] text-center sm:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
          honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
