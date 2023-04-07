import React from "react";
import { motion } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";

const Krishibidgroup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h5 className="flex gap-1 font-medium text-ml font-titleFont">
        Engineer, IT System & Service Integration{" "}
        <span className="text-textGreen tracking-wide">@Krishibid Group</span>
      </h5>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2018 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <AiFillCheckCircle />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <AiFillCheckCircle />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects.
        </li>
      </ul>
    </motion.div>
  );
};

export default Krishibidgroup;
