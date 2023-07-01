import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { nextjsImg } from "@/public/assets";

const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-containerSmall mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* Project 1 */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/kallanchandraroy/NextJs-portfolio"
            target="_blank"
          ></a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <p className="bg-[#112240] text-sm md:text-baser p-2 md:p-6 rounded-md">
              Next Js Airbnb Project
            </p>
            <h3 className="text-2xl font-bold">Next JS Project</h3>
          </div>
        </div>
      </div>
      {/* Project 2 */}

      {/* Project 3 */}
    </section>
  );
};

export default Projects;
