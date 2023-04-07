import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Kgecom from "./Works/Kgecom";
import Krishibidgroup from "./Works/Krishibidgroup";

const Experience = () => {
  const [workKgecom, setWorkKgecom] = useState(true);
  const [workKrishibid, setWorkKrishibid] = useState(false);

  //onclick handler

  const handleKgecom = () => {
    setWorkKgecom(true);
    setWorkKrishibid(false);
  };

  const handleKrishibid = () => {
    setWorkKgecom(false);
    setWorkKrishibid(true);
  };

  return (
    <div>
      <section
        id="experience"
        className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
      >
        <SectionTitle title="where I have worked" titleNo="02" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
          <ul className="w-72">
            <li
              onClick={handleKgecom}
              className={`${
                workKgecom
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              KGeCom Limited
            </li>
            <li
              onClick={handleKrishibid}
              className={`${
                workKrishibid
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              Krishibid Group
            </li>
          </ul>

          {workKgecom && <Kgecom />}
          {workKrishibid && <Krishibidgroup />}
        </div>
      </section>
    </div>
  );
};

export default Experience;
