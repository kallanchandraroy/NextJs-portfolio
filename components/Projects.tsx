import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { nextjsImg } from "@/public/assets";

const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-containerSmall mx-auto py-10 mbl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* Project 1 */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div>
          <a
            href="https://github.com/kallanchandraroy/NextJs-portfolio"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={nextjsImg}
                alt="nextjsImg"
              />
            </div>
          </a>
        </div>
        <div></div>
      </div>
      {/* Project 2 */}
      <div>
        <div></div>
        <div></div>
      </div>
      {/* Project 3 */}
      <div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Projects;
