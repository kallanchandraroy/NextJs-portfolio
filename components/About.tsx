import SectionTitle from "./SectionTitle";
import { AiFillCheckCircle } from "react-icons/ai";
import { profileImg } from "@/public/assets/";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 mbl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col mdl:flex-row gap-16">
        <div className="w-full mdl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Kallan Chandra Roy and I enjoy creating things
            that live on the internet. My interest in{" "}
            <span className="text-textGreen">Programmmig started back</span>
            in 2018 when i decided to try editing custom Web App.
          </p>

          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCheckCircle />
              </span>
              Next Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCheckCircle />
              </span>
              React Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCheckCircle />
              </span>
              Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCheckCircle />
              </span>
              Laravel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCheckCircle />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCheckCircle />
              </span>
              REST API
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCheckCircle />
              </span>
              ASP.NET CORE
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCheckCircle />
              </span>
              Web API
            </li>
          </ul>
        </div>
        <div className="w-full mdl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-md">
            <div className="w-full h-full relative z-20 flex pl-6 mdl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
            </div>
            <div className="lgl:inline-block absolute w-full h-80 rounded-lg top-0 left-0 group-hover:bg-transparent  duration-300"></div>
          </div>
          <div className="lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-lg group-hover:-translate-x-3 group-hover:-translate-y-3 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
